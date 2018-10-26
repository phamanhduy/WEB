/**
 * @flow
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader, Dropdown, Icon, Menu, Image, Button, List, Feed, Form } from 'semantic-ui-react'

import Video from './Components/Video.js'
import * as action from './roomPageActions.js'

require('./style.css')

class Rooms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'gamepad',
			streamer: [
				'stream1'
			]
		}
	  }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	componentDidMount () {
		this.props.INIT()
	}
	render () {
		const { isLinksLoaded, media, stores } = this.props
		const { activeItem } = this.state
		console.log('>>>store', stores)
		return (
			<div>
				{isLinksLoaded ? (
					<Loader active>Loading...</Loader>
				) : (
					<div id="main-content-board-conversation-stream">
						<Menu attached='top'>
							<Dropdown item icon='wrench' simple>
								<Dropdown.Menu>
									<Dropdown.Item>
										<Icon name='dropdown' />
										<span className='text'>New</span>
										<Dropdown.Menu>
											<Dropdown.Item onClick={() => this.sendDataStream('sdsd')}>Document</Dropdown.Item>
											<Dropdown.Item>Image</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown.Item>
									<Dropdown.Item>Open</Dropdown.Item>
									<Dropdown.Item>Save...</Dropdown.Item>
									<Dropdown.Item>Edit Permissions</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Header>Export</Dropdown.Header>
									<Dropdown.Item>Share</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<Menu.Menu position='right'>
								<Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
									<Icon name='gamepad' />
								</Menu.Item>

								<Menu.Item
									name='video camera'
									active={activeItem === 'video camera'}
									onClick={this.handleItemClick}
								>
									<Icon name='video camera' />
								</Menu.Item>

								<Menu.Item
									name='video play'
									active={activeItem === 'video play'}
									onClick={this.handleItemClick}
								>
									<Icon name='video play' />
								</Menu.Item>

								<div className='ui right aligned category search item'>
									<div className='ui transparent icon input'>
										<input className='prompt' type='text' placeholder='Search animals...' />
										<i className='search link icon' />
									</div>
									<div className='results' />
								</div>
							</Menu.Menu>
						</Menu>

						<div className='narbar-right'>
							<div className='user-online'>
								<List divided verticalAlign='middle'>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Lena</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Lindsay</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Mark</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Molly</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Mark</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Molly</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Mark</List.Content>
									</List.Item>
									<List.Item>
										<List.Content floated='right'>
											<Button circular color='blue'></Button>
										</List.Content>
										<Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
										<List.Content>Molly</List.Content>
									</List.Item>
								</List>
							</div>
							<div className='feed-user-right'>
								<Feed>
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
								<Form reply className='text-area-comment'>
									<Form.TextArea />
								</Form>
							</div>
						</div>
						<div className='signal'>

						</div>
						<div className='video-bottom-friend'>
							<div className='video-item-wrapper'>
								<div className='video-item'>
									<Video stream={media.stream} userId={media.userId} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	media: state.media,
	getVideo: action.getVideo,
	stores: state
})

const mapDispatchToProps = dispatch => ({
	storeVideo: (stream) => dispatch(action.streamVideo(stream)),
	INIT: () => action.init(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Rooms)
