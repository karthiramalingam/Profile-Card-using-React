const userData=[
    {
        name:"jack",
        city:"new york",
        des:"software developer", 
         skills:["UI/UX","front end development",
            "HTML","CSS","Javascript","React","Node"],
         online:false, 
         profile:"img/download.jpg",
    },
    {
        name:"ravi",
        city:"coimbatore",
        des:"software developer", 
         skills:["UI/UX","front end development",
            "HTML","CSS","Javascript","React","Node"],
         online:true, 
         profile:"img/download.jpg",
    },
];
function User(props){
    return (
    <div className="card-container">
    <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
    <img src={props.profile} className="img1"alt=""/>
     <h3>{props.name}</h3>
     <h3>{props.city}</h3>
     <p>{props.des}</p>
     <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
     </div>
     <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))} 
        </ul>
     </div>
    </div>
    );
}
export const UserCard = () => {
  return (
    // <User name="jack" city="new york" des="software developer" skills={["UI/UX","front end development",
    //     "HTML","CSS","Javascript","React","Node"]} online={false} profile="img/download.jpg"/>
    <>
    {
        userData.map((user,index)=>(
            <User key={index} name={user.name}
            city={user.city}
            des={user.des}
            online={user.online}
            profile={user.profile}
            skills={user.skills}/>
        ))
}
    </>
  )
}
