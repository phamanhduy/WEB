import React, { Component } from 'react'
import {
	TextArea,
	Form,
	Tab
} from 'semantic-ui-react'
class TabExampleSecondaryPointing extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			boxHight: '30px'
		}
	}


	render() {
		// const { boxHight } = this.state

		const BoxStatus = () => {
			return (
				<Form id='form-box-status'>
					<TextArea autoHeight rows={2} placeholder='Bạn đang nghĩ gì vậy?' />
				</Form>
			)
		}

		const panes = [
			{ menuItem: 'Tạo bài viết', render: () => <Tab.Pane attached={false}><BoxStatus /></Tab.Pane> }, // eslint-disable-line
			{ menuItem: 'Tạo phòng học', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> }, // eslint-disable-line
			{ menuItem: 'Phát trực tiếp', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> } // eslint-disable-line
		]

		return (
			<Tab menu={{ pointing: true }} panes={panes} />
		)
	}
}

export default TabExampleSecondaryPointing
