import { useState } from 'react';
import './Content.css';

const Content = () => {
    const [ activeText, setActiveText ] = useState(true);
    const [ activeProfile, setActiveProfile ] = useState(false);
    const [ activeExp, setActiveExp ] = useState(false);
    const [ activeProject, setActiveProject ] = useState(false);

    const profileHandler = () => {
        setActiveProfile(true);
        setActiveText(false);
        setActiveExp(false);
        setActiveProject(false);
    }

    const expHandler = () => {
        setActiveExp(true);
        setActiveText(false);
        setActiveProfile(false);
        setActiveProject(false);
    }

    const projectHandler = () => {
        setActiveProject(true);
        setActiveText(false);
        setActiveProfile(false);
        setActiveExp(false);
    }
    return(
        <div class="main">
            <div className="topic">
                <div className="items" onClick={profileHandler} id="profileTopic" style={{ borderBottom: activeProfile ? '6px solid rgb(124, 67, 236)' : '3px solid black'}}>Profile</div>
                <div className="items" onClick={expHandler} id="expTopic" style={{ borderBottom: activeExp ? '6px solid rgb(124, 67, 236)' : '3px solid black'}}>Exp</div>
                <div className="items" onClick={projectHandler} id="projectTopic" style={{ borderBottom: activeProject ? '6px solid rgb(124, 67, 236)' : '3px solid black'}}>Project</div>
            </div>
            <div className="contents">    
                <div 
                    id="text" 
                    className="someText"
                    style={{ display: activeText ? 'block' : 'none' }}
                >
                    <img src="https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                </div>
                <div id="forProfile" className="items2" 
                style={{
                    backgroundColor:'rgb(250, 237, 239)',
                    display: activeProfile ? 'block' : 'none',
                    lineHeight: '1.5em'
                }}>
                    <div style={{fontSize:"20px", lineHeight:"50px", fontFamily:"微軟正黑體"}}>
                        <span></span>Shuntei's Store是一個結合了東方優雅與西方前衛的線上購物體驗。
                        我們的平台擁有一系列從精緻的時尚的生活用品&電子產品、獨特的手工藝品到頂級的設計家居品，
                        每一件商品都是經過我們團隊精心挑選，確保其品質和獨特性。
                        旨在為追求特別且優雅的顧客提供一站式購物解決方案。
                    </div>
                </div>
                <div id="forExp" className="items2" 
                style={{
                    backgroundColor:'rgb(250, 237, 239)', 
                    display: activeExp ? 'block' : 'none',
                    lineHeight: '1.5em'
                }}>
                    <div style={{fontSize:"20px", lineHeight:"50px", fontFamily:"微軟正黑體"}}>
                        自1993年成立以來，Shuntei's Store已成功吸引了數百萬的忠實客戶，並在亞太地區獲得了廣泛的讚譽。
                        我們的核心理念是為客戶提供一個既簡單又優雅的購物體驗，
                        我們不斷進行創新，提供了多種便捷的購物和付款方式，同時注重每位顧客的購物體驗。
                        對顧客的關心和對商品的熱愛使我們能在眾多線上商城中脫穎而出。
                    </div>
                </div>
                <div id="forProject" className="items2" 
                style={{
                    display: activeProject ? 'block' : 'none',
                    backgroundColor:'rgb(250, 237, 239)', 
                    lineHeight: '1.5em'
                }}>
                    <div style={{fontSize:"20px", lineHeight:"50px", fontFamily:"微軟正黑體"}}>
                        目前，Shuntei's Store正在與多個國際設計師和品牌合作，策劃一系列的限量版合作商品。
                        我們還計劃在接下來的季度中，網站將進行一次大規模的更新，
                        引入3D和AR技術，讓顧客能在購買前更真實地預覽商品。
                        我們還會加強社交媒體的互動，包括直播購物和專家講座，以滿足現代消費者的多元需求。
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;    