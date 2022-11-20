import React from 'react';

function section4(props) {

    const {hideSection3com} = props;

    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}>
            <div style={{ width: "100%", height: "59px", padding: "0px 16px", backgroundColor: "#F0F2F5" }}>
                <div style={{ height: "59px", width: "100%", padding: "calc((59px - 24px)/2) 0 calc((59px - 24px)/2) 0", display: "flex" }}>
                    <div style={{ width: "54px", height: "24px", position: "relative" }}>
                        <button onClick={hideSection3com} style={{ width: "24px", height: "24px", position: "absolute", top: "0px", left: "0px", border: "hidden", cursor: "pointer" }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="m19.1 17.2-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z"></path></svg>
                        </button>
                    </div>
                    <div style={{ width: "calc(100% - 54px)", height: "24px", position: "relative" }}>
                        <div style={{ height: "21.6px", width: "100%", position: "absolute", top: "0px", left: "0px" }}><p style={{ position: "absolute", left: "0px", color: "black" }}>Search Messages</p></div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", height: "49px", padding: "7px", borderBottom: "2px solid #F0F2F5" }}>
                <div style={{ display: "flex", width: "100%", height: "35px", backgroundColor: "#F0F2F5", borderRadius: "10px" }}>
                    <div style={{ height: "35px", width: "30px", border: "none", borderRadius: "10px" }}>
                        <button style={{ height: "35px", width: "30px", backgroundColor: "#F0F2F5", borderRadius: "10px", border: "hidden" }}><svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg></button>
                    </div>
                    <div style={{ width: "calc(100% - 30px)", height: "35px", border: "hidden", padding: "0 32px 0 35px" }}>
                        <div style={{ width: "100%", height: "20px" }}>
                            <input type="search" name="" id="" style={{ width: "100%", height: "100%", backgroundColor: "#F0F2F5", border: "hidden", marginTop: "calc(15px / 2)" }} placeholder="Search or start new chat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default section4;
