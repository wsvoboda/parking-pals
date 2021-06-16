import React from "react";
import Landing from "./Landing";
import FAQ from "./FAQ";
import RegisterHost from "./RegisterHost";
import Error from "./Error";
import ProfileUser from "./ProfileUser";
import RegisterUser from "./RegisterUser";
import DrivewayResults from "./DrivewayResults";
import DrivewayIndividual from "./DrivewayIndividual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
	return (
		<div id="main-navbar">
			<Router>
				<div className="navbar-links">
					<Link class="main-link" to="/">
						Home
					</Link>
					<Link class="main-link" to="/faq">
						FAQ
					</Link>
					<Link class="main-link" to="/registeruser">
						User Registration
					</Link>
					<Link class="main-link" to="/registerhost">
						Host Registration
					</Link>
					<Link class="main-link" to="/profile">
						Profile
					</Link>
					<Link class="main-link" to="/searchresults">
						SearchResults
					</Link>
					<Link class="main-link" to="/result">
						OneDriveway
					</Link>
				</div>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/faq" component={FAQ} />
					<Route path="/registeruser" component={RegisterUser} />
					<Route path="/registerhost" component={RegisterHost} />
					<Route path="/profile" component={ProfileUser} />
					<Route path="/searchresults" component={DrivewayResults} />
					<Route path="/result" component={DrivewayIndividual} />
					<Route path="*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}
