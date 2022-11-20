import React, { useState } from 'react';
import Section1 from './section/section1';
import Section2 from './section/section2';
import Section3 from './section/section3';
import Section4 from './section/section4';

function Section() {

    const [section3con, setSection3con] = useState({ width: "0px", height: "0px", display: "none" });
    const [size, setSize] = useState({ display: "none" });
    const [search, setSearch] = useState({ display: "none" });


    const hideSection3com = () => {
        setSection3con({ width: "0px", height: "0px", display: "none" });
        setSearch({ display: "none" });
        setSize({ display: "none" });
    }

    const showSize = () => {
        console.log("section size");
        if (size.display === "none") {
            console.log("size.display===none");
            setSearch({ display: "none" })
            setSection3con({ width: "23%", height: "100%", display: "block" });
            setSize({ display: "block" });
        }
    }
    const showSearch = () => {
        console.log("section size");
        if (search.display === "none") {
            console.log("search.display===none");
            setSize({ display: "none" });
            setSection3con({ width: "23%", height: "100%", display: "block" });
            setSearch({ display: "block" });
        }
    }



    return (
        <div style={{ width: "100%", height: "100%", display: "flex", position: "fixed", top: "0px", right: "0px", left: "0px", bottom: "0px" }}>
            {/* Section1 and section2 */}
            <div style={{ width: `calc(100% - ${section3con.width})`, height: "100%", display: "flex" }}>
                <Section1 />
                <Section2 showSize={showSize} showSearch={showSearch} />
            </div>

            <div className='section3' style={section3con}>
                <div style={{ width: "100%", height: "100%", display: size.display }}>
                    <Section3 hideSection3com={hideSection3com} />
                </div>
                <div style={{ width: "100%", height: "100%", display: search.display }}>
                    <Section4 hideSection3com={hideSection3com} />
                </div>
            </div>
        </div>

    );
}

export default Section;
