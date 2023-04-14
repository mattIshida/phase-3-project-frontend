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
import Board from './components/Board'
import { Button } from 'react-bootstrap'
import Controls from './components/Controls'

const URL = "http://localhost:9292"

function App() {
  const [members, setMembers] = useState([])
  const [votes, setVotes] = useState([])
  const [filter, setFilter]= useState({partyFilter: [], positionFilter: [], voteFilter: null})
  const [controlOptions, setControlOptions] = useState({alignment: ''})
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10

  useEffect(() => {
    fetch(`${URL}/members?page=${currentPage}&per_page=${perPage}`)
      .then(res => res.json())
      .then(response => {
        setMembers(response);
        setCurrentPage(response[0].positions.current_page);
        setTotalPages(response[0].positions.total_pages);
      })
      .catch(error => console.log(error));
  }, [currentPage]);

  useEffect(() => {
    fetch(`${URL}/votes?page=${currentPage}&per_page=${perPage}`)
      .then(res => res.json())
      .then(response => {
        setVotes(response);
      })
      .catch(error => console.log(error));
  }, [currentPage]);


  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  


  // useEffect(()=> {
  //   fetch(`${URL}/members`)
  //   .then(res => res.json())
  //   .then(setMembers)
  // }, [])

  // useEffect(()=>{
  //   fetch(`${URL}/votes`)
  //   .then(res=> res.json())
  //   .then(setVotes)
  // }, [])

  const shades = votes.map((v, i)=> {
    if(i==0) return 0
    return v.votable_id == votes[i-1].votable_id ? 0 : 1
  }).map((x,i, arr)=> arr.slice(0, i+1).reduce((acc,elem)=>acc+elem, 0)).map(x=> x%2)
 
  const filteredMembers = members.filter((m) => filter.partyFilter.length==0 || filter.partyFilter.includes(m.party))
  .filter((m)=> filter.voteFilter === null || filter.positionFilter.length==0 || filter.positionFilter.includes(m.positions.positions[filter.voteFilter]?.vote_position))
  .filter(m => !controlOptions.party || controlOptions.party===m.party)
  .filter(m=> !controlOptions.state || controlOptions.state == m.state)

  console.log('votes', votes)
  console.log('members', members)
  // return <>Hello</>

  return <>
    <Button onClick={()=>{
      setFilter({partyFilter: [], positionFilter: [], voteFilter: null})
    }}>Clear filters
    </Button>
    {[...Array(totalPages).keys()].map(num => <a onClick={()=>setCurrentPage(num+1)}>{num+1}</a>)}
    <Controls votes={votes} members={members} controlOptions={controlOptions} setControlOptions={setControlOptions}/>
    
    {filter.partyFilter.length>0 || filter.positionFilter.length >0 || filter.voteFilter ? `Showing votes similar to ${filter.member?.last_name}'s on ${filter.voteFilter}` : null}
    <Board 
      members={filteredMembers.slice(0,435)} 
      votes={votes}
      shades={shades}
      setFilter={setFilter}
      controlOptions={controlOptions}
    />
  </>
  // useEffect(()=> {
  //   fetch(`${URL}/bills`)
  //   .then(res => res.json())
  //   .then(setBills)
  // }, [])

  // useEffect(()=> {
  //   fetch(`${URL}/users/${userId}`)
  //   .then(res => res.json())
  //   .then(setUserData)
  // }, [])

  // useEffect(()=> {
  //   fetch(`${URL}/issues`)
  //   .then(res => res.json())
  //   .then(setIssues)
  // }, [])


  // function handleFollowPost(data){
  //   const config = {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type": "application/json" 
  //     },
  //     body: JSON.stringify({
  //       followable_type: data.followable_type, 
  //       followable_id: data.followable_id,
  //       user_id: data.user_id
  //     })
  //   }
  //   fetch(`${URL}/follows`, config)
  //   .then(res => res.json())
  //   .then((json) => {
  //     const newFollows = [...userData.follows, json]
  //     setUserData({...userData, follows: newFollows})
  //   })
  //   // .then(()=>{
  //   //   if (data.followable_type == "Legislator") {
  //   //     const oldLegislator = legislators.find((leg)=>{return leg.id == data.followable_id})
  //   //     const newLegislator = {...oldLegislator, summary_stats: {...oldLegislator.summary_stats, follower_count: oldLegislator.summary_stats.follower_count+1}}
  //   //     const newLegislators = legislators.map((leg) => {
  //   //       if (leg.id == data.followable_id) return {newLegislator} 
  //   //       else return leg
  //   //     })
  //   //     setLegislators(newLegislators)
  //   //   }
  //   // })
  // }

  // function handleFollowDelete(data){
  //   const config = {
  //     method: "DELETE", 
  //     headers: {
  //       "Content-Type": "application/json" 
  //     }
  //   }

  //   fetch(`${URL}/follows/${data.follow_id}`, config)
  //   .then(res => res.json())
  //   .then(() => {
  //     const newFollows = userData.follows.filter((f) => f.id != data.follow_id)
  //     setUserData({...userData, follows: newFollows})
  //   })
  // }

  // function handleFollow(data){
  //   data.follow ? handleFollowPost(data) : handleFollowDelete(data)
  // }

  // function getFollowableIds(userData, followable_type){
  //   if (Object.keys(userData) == 0) return []
  //   if (userData.follows.length == 0) return []
  //   return userData.follows.filter((f) => f.followable_type == followable_type).map(f => f.followable_id)
  // }

  // const legislatorsFollowed = legislators.filter(obj => getFollowableIds(userData, "Legislator").includes(obj.id))
  // const billsFollowed = bills.filter(obj => getFollowableIds(userData, "Bill").includes(obj.id))
  // const issuesFollowed = issues.filter(obj => getFollowableIds(userData, "Subject").includes(obj.id))

  // return (
  //   <div className="App">
  //     <NavBar userId={userId} />
  //     <Switch >
  //       <Route exact path='/'>
  //         <Home />
  //       </Route>
  //       <Route exact path="/legislators">
  //         <LegislatorsPage 
  //           legislators={legislators} 
  //           userData={userData}
  //           onFollow={handleFollow} 
  //         />
  //       </Route>
  //       <Route exact path="/legislators/:id">
  //         <LegislatorDetailPage />
  //       </Route>
  //       <Route exact path="/bills">
  //         <BillsPage bills={bills}
  //         userData={userData}
  //         onFollow={handleFollow}
  //         />
  //       </Route>
  //       <Route exact path="/bills/:id">
  //         <BillDetailPage 
  //           userId={userId}
  //           userData={userData} 
  //         />
  //       </Route>
  //       <Route exact path="/issues" >
  //         <IssuesPage 
  //           issues={issues}
  //           userData={userData}
  //           onFollow={handleFollow}
  //         />
  //       </Route>
  //       <Route>
  //       </Route>
  //       <Route exact path="/users/:id">
  //         <UserHome 
  //           userData={userData} 
  //           legislatorsFollowed={legislatorsFollowed} 
  //           billsFollowed={billsFollowed}
  //           issuesFollowed={issuesFollowed}
  //           onFollow={handleFollow} 
  //         />
  //       </Route>
  //       <Route exact path="/about">
  //         <About />
  //       </Route>
  //     </Switch >
  //   </div>
  // );
}

export default App;
