import "./VideoCard.css";
const VideoCard = () => {
  return (
    <div className="videocard">
      <img
        className="videocard_img"
        src="https://i.ytimg.com/vi/EkGOC5gs1ao/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUlYEqcu-x-i5F9KBfQPh7L_S2NQ"
      ></img>
      <div className="videocard_desp">
        <img
          className="avatar-sm"
          src="https://yt3.ggpht.com/qdo5dDiKZPR9VWKRpn4PH2by2llygF1IF60ALOwa8NEptYYaDBUFyLVPJs2e34LJhDowIzy-Qh4=s68-c-k-c0x00ffffff-no-rj"
        ></img>
        <div className="videocard_desp-main">
          <div className="videocard_desp-desp">
          <div className="videocard_desp-title">  10 Makeup Hacks for All the Ladies around the word of this besautiful things laoaoaoaos</div>
           <div className="videocard_subdesp">
               <span>1.5M Views</span>
               <span><li>22 Feb 2021</li></span>
               <span>Roxsouous</span>
           </div>
          </div>
        </div>
        <span class="material-icons">more_vert</span>
      </div>
    </div>
  );
};
export { VideoCard };
