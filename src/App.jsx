import React, { useState } from "react";


const App = () => {

  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [

    { title: "TOMMY",
     content:{
      role:"Full Stack Developer",tag:"TOMMY",date:"December 2015 present",point1:"Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",point2:"Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",point3:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",point4:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"}},

    { title: "BIGDROP", content:{
      role:"Front-end Developer",tag:"BIGDROP",date:"May 2024 September 2015",point1:"Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",point2:"Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",point3:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",point4:"Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"}},
    { title: "CUKER",content:{
      role:"Engineer Intern",tag:"CUKER",date:"May 2014 September 2015",point1:"I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",point2:"YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",point3:"Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism"}},
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
    <h1 className="text-center font-bold text-4xl mt-4">Experince</h1>
      <section className="flex h-screen justify-center items-center">
        
      <div className="flex  w-[800px] h-[500px] gap-9  items-start ">
        <div className="tabs">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={`tab font-medium px-2 py-2 mb-4 flex flex-col text-black  ${index === activeTab ? "active text-cyan-400 border-l-4 border-cyan-400" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div >
          <h1 className="text-xl font-bold mb-2"> {tabsData[activeTab].content.role}</h1>
          <span className="bg-[#d4dadb] font-semibold px-2 py-1 text-[#6e8b90]"> {tabsData[activeTab].content.tag}</span>
          <p className="my-2 font-medium text-[#313f58b1]">{tabsData[activeTab].content.date}</p>
          <ul className="flex flex-col gap-3">
          <li> {tabsData[activeTab].content.point1}</li>
          <li> {tabsData[activeTab].content.point2}</li>
          <li> {tabsData[activeTab].content.point3}</li>
          <li> {tabsData[activeTab].content.point4}</li>
          </ul>
          <div className="flex justify-center"><button className="bg-cyan-500 mt-5 px-6 py-1">More Info</button></div>
        </div>
      </div>
      
      </section>
      
    </>
  );
};

export default App;
