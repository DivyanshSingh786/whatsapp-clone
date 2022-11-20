import React from 'react';

function Section3(props) {

    const {hideSection3com} = props;

    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#EFF1F4" }}>
            <div style={{ width: "100%", height: "59px", padding: "0px 16px", backgroundColor: "#F0F2F5" }}>
                <div style={{ height: "59px", width: "100%", padding: "calc((59px - 24px)/2) 0 calc((59px - 24px)/2) 0", display: "flex" }}>
                    <div style={{ width: "54px", height: "24px", position: "relative" }}>
                        <button onClick={hideSection3com} style={{ width: "24px", height: "24px", position: "absolute", top: "0px", left: "0px", border: "hidden", cursor: "pointer" }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
                        </button>
                    </div>
                    <div style={{ width: "calc(100% - 54px)", height: "24px", position: "relative" }}>
                        <div style={{ height: "21.6px", width: "100%", position: "absolute", top: "0px", left: "0px" }}><p style={{ position: "absolute", left: "0px", color: "black" }}>Contact info</p></div>
                    </div>
                </div>
            </div>
            <div className='scroll' style={{ width: "100%", height: "calc(100% - 59px)", overflowY: "scroll", paddingBottom: "32px" }}>
                <div style={{ width: "100%", height: "314px", marginBottom: "10px", padding: "28px 30px 19px 30px", backgroundColor: "#FFFFFF" }}>
                    <div style={{ width: "100%", height: "200px", marginBottom: "15px" }}>
                        <div style={{ width: "200px", height: "200px", margin: "auto", cursor: "pointer" }}>
                            <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                                <img width="100%" height="100%" src="https://pps.whatsapp.net/v/t61.24694-24/177528748_526502759136806_3144586603312451379_n.jpg?ccb=11-4&oh=9c680f813078c550a29b418078f1301e&oe=628AC5DB" alt="" />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "52px" }}>
                        <div style={{ width: "100%", height: "24px" }}>Akshay</div>
                        <div style={{ width: "100%", height: "24px", marginTop: "4px" }}>
                            <span style={{ margin: "auto" }}>hsdfdf</span>
                        </div>
                    </div>
                </div>
                <div style={{ height: "84.400px", width: "100%", padding: "17px 30px 19px 30px", marginBottom: "10px", backgroundColor: "#FFFFFF" }}>
                    <div style={{ height: "18.400px", width: "100%", marginBottom: "8px", position: "relative" }}>
                        <span style={{ height: "18.400px", width: "auto", position: "absolute", left: "0px" }}>About</span>
                    </div>
                </div>

                <div style={{ height: "58px", width: "100%", paddingLeft: "13px", paddingRight: "13px", display: "flex", marginBottom: "10px", backgroundColor: "#FFFFFF" }}>
                    <div style={{ width: "74px", height: "20px", margin: "auto 0px" }}>
                        <span style={{ width: "21.325px", height: "20px" }}>
                            <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" className=""><path fill="currentColor" d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path></svg>
                        </span>
                    </div>
                    <div style={{ width: "calc(100% - 110px)", height: "22px", paddingRight: "30px", margin: "auto 0px" }}>
                        <div style={{ width: "auto", height: "22px", marginTop: "-4px", position: "relative" }}>
                            <span style={{ width: "auto", height: "22.4px", position: "absolute", left: "0px" }}>Starred messages</span>
                        </div>
                    </div>
                    <div style={{ width: "36px", height: "21px", paddingRight: "30px", margin: "auto 0px" }}>
                            <span style={{ width: "10px", height: "21px" }}>
                            <svg viewBox="0 0 10 21" width="10" height="21" className=""><path fill="currentColor" d="m1 15.75 5.2-5.2L1 5.35l1.5-1.5 6.5 6.7-6.6 6.6-1.4-1.4z"></path></svg>
                            </span>
                    </div>
                </div>

                <div style={{ height: "108px", width: "100%", marginBottom: "10px", backgroundColor: "#FFFFFF", color: "#EA0038" }}>
                    <div style={{ height: "54px", width: "100%", paddingLeft: "13px", display: "flex" }}>
                        <div style={{ width: "74px", height: "24px", margin: "auto 0px" }}>
                            <span style={{ width: "24px", height: "24px" }}>
                                <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M12 2.8c-5.3 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7 9.7-4.3 9.7-9.7-4.4-9.7-9.7-9.7zm-7.3 9.7c0-4 3.3-7.3 7.3-7.3 1.6 0 3.1.5 4.3 1.4L6.1 16.8c-.9-1.2-1.4-2.7-1.4-4.3zm7.3 7.3c-1.6 0-3-.5-4.2-1.4L17.9 8.3c.9 1.2 1.4 2.6 1.4 4.2 0 4-3.3 7.3-7.3 7.3z"></path></svg>
                            </span>
                        </div>
                        <div style={{ width: "calc(100% - 74px)", height: "22px", paddingRight: "30px", margin: "auto 0px" }}>
                            <div style={{ width: "auto", height: "22px", marginTop: "-4px", position: "relative" }}>
                                <span style={{ width: "auto", height: "22.4px", position: "absolute", left: "0px" }}>Block</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "54px", width: "100%", paddingLeft: "13px", display: "flex" }}>
                        <div style={{ width: "74px", height: "24px", margin: "auto 0px" }}>
                            <span style={{ width: "24px", height: "24px" }}>
                                <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M14.091 4.2H6.318c-.691 0-1.295.432-1.555 1.036l-2.591 6.132c-.086.173-.172.346-.172.605V13.7c0 .95.777 1.727 1.727 1.727h5.441L8.305 19.4v.259c0 .345.173.691.345.95l.95.864 5.7-5.7c.345-.345.518-.777.518-1.209V5.927c0-.95-.777-1.727-1.727-1.727zm3.454 0v10.364H21V4.2h-3.455z" id="thumb-down"></path></svg>
                            </span>
                        </div>
                        <div style={{ width: "calc(100% - 74px)", height: "22px", paddingRight: "30px", margin: "auto 0px" }}>
                            <div style={{ width: "auto", height: "22px", marginTop: "-4px", position: "relative" }}>
                                <span style={{ width: "auto", height: "22.4px", position: "absolute", left: "0px" }}>Report</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: "54px", width: "100%", paddingLeft: "13px", display: "flex", marginBottom: "10px", backgroundColor: "#FFFFFF", color: "#EA0038" }}>
                    <div style={{ width: "74px", height: "24px", margin: "auto 0px" }}>
                        <span style={{ width: "24px", height: "24px" }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6H6v12zM19 3h-3.5l-1-1h-5l-1 1H5v2h14V3z"></path></svg>
                        </span>
                    </div>
                    <div style={{ width: "calc(100% - 74px)", height: "22px", paddingRight: "30px", margin: "auto 0px" }}>
                        <div style={{ width: "auto", height: "22px", marginTop: "-4px", position: "relative" }}>
                            <span style={{ width: "auto", height: "22.4px", position: "absolute", left: "0px" }}>Delete chat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
