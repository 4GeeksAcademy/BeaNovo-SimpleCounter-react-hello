import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";





const Home = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
                {/* <FontAwesomeIcon icon={faClock} /> */}
				{/* <i class="fa fa-clock text-white"></i> */}
				<i className="fa-regular fa-clock"></i>
				</div>
				<div className="col">
					{props.num6}
				</div>
				<div className="col">
					{props.num5}
				</div>
				<div className="col">
					{props.num4}
				</div>
				<div className="col">
					{props.num3}
				</div>
				<div className="col">
					{props.num2}
				</div>
				<div className="col">
					{props.num1}
				</div>
			</div>
		</div>
	);
};

export default Home;
