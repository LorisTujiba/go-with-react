import React, {Component} from 'react'
import Header from '../components/Header';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Grid, Panel, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, HelpBlock }from 'react-bootstrap';

class PostNew extends Component{

	renderField(field){
		console.log('field ',field)
	  	const className = field.meta.error && field.meta.touched
                  ? "error"
                  : !field.meta.error
                    ? "success"
                    : null;

	    return(
	        <FormGroup validationState={className}>
	          <ControlLabel>
	            {field.label}
	          </ControlLabel>
	          <FormControl
	            type="text"
	            {...field.input}
	          />
	          <FormControl.Feedback/>
	          <HelpBlock>
	            {field.meta.touched ? field.meta.error : ''}
	          </HelpBlock>
	        </FormGroup>
	    )
	}	

	onSubmit(values) {
		console.log(values);
	}

	render(){
		const { handleSubmit } = this.props;

		return(
			<div>
				<Header />
				<Grid>
					<Panel header="Insert New Post" bsStyle="success">
						<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<Field
				              label="Title"
				              name="title"
				              component={this.renderField}
				            />
				            <Field
				              label="Tag"
				              name="tag"
				              component={this.renderField}
				            />
				            <Field
				              label="Body"
				              name="body"
				              component={this.renderField}
				            />			
				            <ButtonToolbar>
								<Button bsStyle="primary">Submit</Button>
								<Button bsStyle="danger">Cancel</Button>
							</ButtonToolbar>
						</form>
					</Panel>
				</Grid>
			</div>
		)		
	}
}

function validate(values){
	const errors = {};
	console.log(values)

	if(!values.title || values.title.length < 3){
    	errors.title = "Enter a title that is at least 3 characters!";
  	}
	if(!values.tag){
	 	errors.tag = "Enter some tag";
	}
	if(!values.body){
	  	errors.body = "Enter some body";
  	}

  return errors;
}

export default reduxForm({
	validate,
	form : 'PostsNew'
})(PostNew);