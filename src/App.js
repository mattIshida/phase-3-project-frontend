import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import LegislatorsPage from "./components/LegislatorsPage"
import LegislatorDetailPage from "./components/LegislatorDetailPage"
import BillsPage from "./components/BillsPage"
import BillDetailPage from "./components/BillDetailPage"
import UserHome from "./components/UserHome"
import IssuesPage from "./components/IssuesPage"


const URL = "http://localhost:9292"

function App() {

  const [legislators, setLegislators] = useState([])
  const [bills, setBills] = useState([])
  const [userData, setUserData] = useState([])
  const [issues, setIssues] = useState([])
  const [userId , setUserId] = useState(5)

  useEffect(()=> {
    fetch(`${URL}/legislators`)
    .then(res => res.json())
    .then(setLegislators)
  }, [])

  useEffect(()=> {
    fetch(`${URL}/bills`)
    .then(res => res.json())
    .then(setBills)
  }, [])

  useEffect(()=> {
    fetch(`${URL}/users/${userId}`)
    .then(res => res.json())
    .then(setUserData)
  }, [])

  useEffect(()=> {
    fetch(`${URL}/issues`)
    .then(res => res.json())
    .then(setIssues)
  }, [])


  function handleFollowPost(data){
    const config = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        followable_type: data.followable_type, 
        followable_id: data.followable_id,
        user_id: data.user_id
      })
    }
    fetch(`${URL}/follows`, config)
    .then(res => res.json())
    .then((json) => {
      const newFollows = [...userData.follows, json]
      setUserData({...userData, follows: newFollows})
    })
    // .then(()=>{
    //   if (data.followable_type == "Legislator") {
    //     const oldLegislator = legislators.find((leg)=>{return leg.id == data.followable_id})
    //     const newLegislator = {...oldLegislator, summary_stats: {...oldLegislator.summary_stats, follower_count: oldLegislator.summary_stats.follower_count+1}}
    //     const newLegislators = legislators.map((leg) => {
    //       if (leg.id == data.followable_id) return {newLegislator} 
    //       else return leg
    //     })
    //     setLegislators(newLegislators)
    //   }
    // })
  }

  function handleFollowDelete(data){
    const config = {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json" 
      }
    }

    fetch(`${URL}/follows/${data.follow_id}`, config)
    .then(res => res.json())
    .then(() => {
      const newFollows = userData.follows.filter((f) => f.id != data.follow_id)
      setUserData({...userData, follows: newFollows})
    })
  }

  function handleFollow(data){
    data.follow ? handleFollowPost(data) : handleFollowDelete(data)
  }

  function getFollowableIds(userData, followable_type){
    if (Object.keys(userData) == 0) return []
    if (userData.follows.length == 0) return []
    return userData.follows.filter((f) => f.followable_type == followable_type).map(f => f.followable_id)
  }

  const legislatorsFollowed = legislators.filter(obj => getFollowableIds(userData, "Legislator").includes(obj.id))
  const billsFollowed = bills.filter(obj => getFollowableIds(userData, "Bill").includes(obj.id))
  const issuesFollowed = issues.filter(obj => getFollowableIds(userData, "Subject").includes(obj.id))

  return (
    <div className="App">
      <NavBar userId={userId} />
      <Switch >
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path="/legislators">
          <LegislatorsPage 
            legislators={legislators} 
            userData={userData}
            onFollow={handleFollow} 
          />
        </Route>
        <Route exact path="/legislators/:id">
          <LegislatorDetailPage />
        </Route>
        <Route exact path="/bills">
          <BillsPage bills={bills}
          userData={userData}
          onFollow={handleFollow}
          />
        </Route>
        <Route exact path="/bills/:id">
          <BillDetailPage 
            userId={userId}
            userData={userData} 
          />
        </Route>
        <Route exact path="/issues" >
          <IssuesPage 
            issues={issues}
            userData={userData}
            onFollow={handleFollow}
          />
        </Route>
        <Route exact path="/users/:id">
          <UserHome 
            userData={userData} 
            legislatorsFollowed={legislatorsFollowed} 
            billsFollowed={billsFollowed}
            issuesFollowed={issuesFollowed}
            onFollow={handleFollow} 
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch >
    </div>
  );
}

export default App;
