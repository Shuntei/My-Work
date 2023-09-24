import './Content2.css';
import { useState } from 'react';

const Content2 = () => {
    const [ winningMessage, setWinningMessage ] = useState(null); 
    const [ hasClicked, setHasClicked ] = useState(false);

    const handleTryLuck = () => {
        if(hasClicked) return; // 如果已經點擊過，則直接返回，不再處理
        setHasClicked(true); // 更新點擊狀態
        
        if(Math.random() < 0.33) {
            setWinningMessage("恭喜中獎!🎉");
        }else{
            setWinningMessage("很遺憾，未中獎...😭")
        }
    }
    return(     
        <>      
            {winningMessage && <div className={`winning-message ${hasClicked ? 'show':''}`}>{winningMessage}</div>}
            <div className="wrap">            

                <div className="item" onClick={handleTryLuck}>
                    <div className="pic">
                        <img src={require("./S__35930124.jpg")} />
                    </div>
                    <div className="txt">
                        <h1>試試手氣</h1>
                        <p>探索我們的特色商品，<br/>獨家優惠等你拿！<br/>不嘗試，怎知有何驚喜？</p>
                    </div>
                </div>
                <div className="item" onClick={handleTryLuck}>
                    <div className="pic">               
                        <img src={require("./S__35930124.jpg")} />
                    </div>
                    <div className="txt">
                        <h1>試試手氣</h1>
                        <p>今日特惠，錯過不再。<br/>來找尋你的心頭好！<br/>購物，就該有所獲。</p>                    
                    </div>
                </div>
                <div className="item" onClick={handleTryLuck}>
                    <div className="pic">
                        <img src={require("./S__35930124.jpg")} />
                    </div>
                    <div class="txt">
                        <h1>試試手氣</h1>
                        <p>精選商品，驚喜價格。<br/>限時特賣，快來選購！<br/>讓購物成為一種享受。</p>  
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Content2;