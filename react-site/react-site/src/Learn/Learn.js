import './learn.scss'
import './mixins.scss'

function Learn() {
    return (
        <div className = "learn">
            <h1>What I Have Learnt</h1>
            <div className= "learn-items">
                <div className="item">
                    <h3>Class components</h3>
                    <img src="class.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="item">
                    <h3>Functional components</h3>
                    <img src="function.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="item">
                    <h3>React State</h3>
                    <img src="state.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="item">
                    <h3>React Hooks</h3>
                    <img src="hooks.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="item">
                    <h3>React Props</h3>
                    <img src="props.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="item">
                    <h3>Event Binding</h3>
                    <img src ="event.jpg" alt= ""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Soluta vel laborum ad atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Learn