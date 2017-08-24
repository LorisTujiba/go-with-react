import React, {Component} from 'react'
import Header from '../components/Header';
import { reduxForm } from 'redux-form';
import { Grid, FormGroup, FormControl, ControlLabel }from 'react-bootstrap';

class PostNew extends Component{

	render(){
		return(
			<div>
				<Header />
				<Grid>
					<form>
						<FormGroup
							controlId="formBasicText"
						>
							<ControlLabel>
								Title
							</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter title here ..."
							>

							</FormControl>
						</FormGroup><FormGroup
							controlId="formBasicText"
						>
							<ControlLabel>
								Body
							</ControlLabel>
							<FormControl
								type="text"
								placeholder="Enter body here ..."
							>

							</FormControl>							
						</FormGroup>
					</form>
				</Grid>
			</div>
		)		
	}
}

export default PostNew;