import React, { Component } from 'react'
import {
	Container,
	Sticky,
	Button,
	Card,
	Grid,
	Image,
	Feed,
	Icon
} from 'semantic-ui-react'
import BoxStatus from './BoxStatus.jsx'

class Home extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {}
	  }


	handleContextRef = contextRef => this.setState({ contextRef })
	render () {
		/* require CSS*/ 
		require('./style.css')
		/* require CSS*/

		const { contextRef } = this.state
		const arrFeed = [0, 1, 2, 3, 4]
		const FeedtimeLine = () => {
			return (
				<Feed id="feed-time-line">
					<Feed.Event>
						<Feed.Label>
							<img alt="" src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
						</Feed.Label>
						<Feed.Content>
							<Feed.Summary>
								<Feed.User>Elliot Fu</Feed.User> added you as a friend
								<Feed.Date>1 Hour Ago</Feed.Date>
							</Feed.Summary>
							<Feed.Meta>
								<Feed.Like>
									<Icon name='like' />
									4 Likes
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
						<Feed.Content>
							<Feed.Summary>
								<a>Helen Troy</a> added <a>2 new illustrations</a>
								<Feed.Date>4 days ago</Feed.Date>
							</Feed.Summary>
							<Feed.Extra images>
								<a>
									<img alt="" src='https://react.semantic-ui.com/images/wireframe/image.png' />
								</a>
								<a>
									<img alt="" src='https://react.semantic-ui.com/images/wireframe/image.png' />
								</a>
							</Feed.Extra>
							<Feed.Meta>
								<Feed.Like>
									<Icon name='like' />
									1 Like
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
						<Feed.Content>
							<Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
							<Feed.Meta>
								<Feed.Like>
									<Icon name='like' />
									8 Likes
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
						<Feed.Content>
							<Feed.Summary>
								<a>Joe Henderson</a> posted on his page
								<Feed.Date>3 days ago</Feed.Date>
							</Feed.Summary>
							<Feed.Extra text>
								Ours is a life of constant reruns. Were always circling back to where wed we started,
								then starting all over again. Even if we dont run extra laps that day, we surely will
								come back for more of the same another day soon.
							</Feed.Extra>
							<Feed.Meta>
								<Feed.Like>
									<Icon name='like' />
									5 Likes
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
						<Feed.Content>
							<Feed.Summary>
								<a>Justen Kitsune</a> added <a>2 new photos</a> of you
								<Feed.Date>4 days ago</Feed.Date>
							</Feed.Summary>
							<Feed.Extra images>
								<a>
									<img alt="" src='https://react.semantic-ui.com/images/wireframe/image.png' />
								</a>
								<a>
									<img alt="" src='https://react.semantic-ui.com/images/wireframe/image.png' />
								</a>
							</Feed.Extra>
							<Feed.Meta>
								<Feed.Like>
									<Icon name='like' />
									41 Likes
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			)
		}

		return (
			<div id='home-content' ref={this.handleContextRef}>
				<Container>
					<Grid>
						<Grid.Row>
							<Grid.Column width={4}>
								<Sticky context={contextRef}>
									<Card>
										<Card.Content>
											<Image circular floated='left' size='tiny' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
											<Card.Header>Steve Sanders</Card.Header>
											<Card.Meta>Friends of Elliot</Card.Meta>
											<Card.Description>
											Steve wants to add you to the group <strong>best friends</strong>
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<div className='ui two buttons'>
												<Button basic color='green'>
													Đã theo dõi
												</Button>
											</div>
										</Card.Content>
									</Card>
									<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
									<br />
									<br />
									<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
								</Sticky>
							</Grid.Column>
							<Grid.Column width={8}>
								<BoxStatus />
								{arrFeed.map((k, _e) => {
									return (
										<FeedtimeLine key={k} />
									)
								})}
							</Grid.Column>
							<Grid.Column width={4}>
								<Sticky context={contextRef}>
									<Card>
										<Card.Content>
											<Card.Header>Recent Activity</Card.Header>
										</Card.Content>
										<Card.Content>
											<Feed>
												<Feed.Event>
													<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
													<Feed.Content>
														<Feed.Date content='1 day ago' />
														<Feed.Summary>
															You added <a>Jenny Hess</a> to your <a>coworker</a> group.
														</Feed.Summary>
													</Feed.Content>
												</Feed.Event>

												<Feed.Event>
													<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
													<Feed.Content>
														<Feed.Date content='3 days ago' />
														<Feed.Summary>
															You added <a>Molly Malone</a> as a friend.
														</Feed.Summary>
													</Feed.Content>
												</Feed.Event>

												<Feed.Event>
													<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
													<Feed.Content>
														<Feed.Date content='4 days ago' />
														<Feed.Summary>
															You added <a>Elliot Baker</a> to your <a>musicians</a> group.
														</Feed.Summary>
													</Feed.Content>
												</Feed.Event>
											</Feed>
											<div style={{textAlign: 'center'}}><a href='#'>xem thêm</a></div>
										</Card.Content>
									</Card>
								</Sticky>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</div>
		)
	}
}

export default Home
