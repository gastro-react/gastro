import ListErrors from './ListErrors'
import React, { useEffect } from 'react'
import agent from '../agent'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
} from '../utils/constants/actionTypes'

import {
  FormPage,
  FormPageTitle,
  Form,
  FormFieldSet,
  InputElement,
  TextAreaElement,
  SubmitButton,
} from '../ui/formPage'

const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
`
const TagListItem = styled.li`
  background: #f4f4f6;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  margin: 0 4px;
  padding: 4px 8px;
`

function Editor(props) {
  const dispatch = useDispatch()
  const editor = useSelector((state) => state.editor)

  const updateFieldEvent = (key) => (ev) => {
    const value = ev.target.value
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
  }

  const changeTitle = updateFieldEvent('title')
  const changeDescription = updateFieldEvent('description')
  const changeBody = updateFieldEvent('body')
  const changeTagInput = updateFieldEvent('tagInput')

  const updateFieldFileEvent = (key) => (ev) => {
    const value = ev.target.files[0]
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
  }

  const changeImage = updateFieldFileEvent('image')

  const watchForEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault()
      dispatch({ type: ADD_TAG })
    }
  }

  const removeTagHandler = (tag) => () => {
    dispatch({ type: REMOVE_TAG, tag })
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    const article = {
      title: editor.title,
      description: editor.description,
      image: editor.image,
      body: editor.body,
      tagList: editor.tagList,
    }

    const slug = { slug: editor.articleSlug }

    console.log(article)
    console.log(Object.assign(article, slug))
    editor.articleSlug
      ? agent.Articles.update(Object.assign(article, slug))
      : agent.Articles.create(article).then((article) =>
          dispatch({ type: ARTICLE_SUBMITTED, article })
        )
  }

  useEffect(() => {
    if (props.match.params.slug) {
      agent.Articles.get(props.match.params.slug).then((article) => {
        dispatch({ type: EDITOR_PAGE_LOADED, article })
      })
    }
    const payload = null
    dispatch({ type: EDITOR_PAGE_LOADED, payload })

    return () => {
      dispatch({ type: EDITOR_PAGE_UNLOADED })
    }
  }, [])

  return (
    <FormPage>
      <div>
        <FormPageTitle>New Article</FormPageTitle>
        <ListErrors errors={editor.errors} />
        <Form>
          <FormFieldSet>
            <InputElement
              type="text"
              placeholder="Article Title"
              value={editor.title || ''}
              onChange={changeTitle}
            />
          </FormFieldSet>
          <FormFieldSet>
            <InputElement type="file" onChange={changeImage} />
          </FormFieldSet>
          <FormFieldSet>
            <InputElement
              type="text"
              placeholder="What's this article about?"
              value={editor.description || ''}
              onChange={changeDescription}
            />
          </FormFieldSet>
          <FormFieldSet>
            <TextAreaElement
              rows="8"
              placeholder="Write your article (in markdown)"
              value={editor.body || ''}
              onChange={changeBody}
            />
          </FormFieldSet>
          <FormFieldSet>
            <InputElement
              type="text"
              placeholder="Enter tags"
              value={editor.tagInput || ''}
              onChange={changeTagInput}
              onKeyUp={watchForEnter}
            />
            <TagList>
              {(editor.tagList || []).map((tag) => {
                return (
                  <TagListItem className="tag-default tag-pill" key={tag}>
                    <i
                      className="ion-close-round"
                      onClick={removeTagHandler(tag)}
                    />
                    {tag}
                  </TagListItem>
                )
              })}
            </TagList>
          </FormFieldSet>
          <SubmitButton
            type="button"
            disabled={editor.inProgress}
            onClick={submitForm}
          >
            Publish Article
          </SubmitButton>
        </Form>
      </div>
    </FormPage>
  )
}

export default Editor

// const mapStateToProps = (state) => ({
// 	...state.editor,
// })

// const mapDispatchToProps = (dispatch) => ({
// 	onAddTag: () => dispatch({ type: ADD_TAG }),
// 	onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
// 	onRemoveTag: (tag) => dispatch({ type: REMOVE_TAG, tag }),
// 	onSubmit: (payload) => dispatch({ type: ARTICLE_SUBMITTED, payload }),
// 	onUnload: (payload) => dispatch({ type: EDITOR_PAGE_UNLOADED }),
// 	onUpdateField: (key, value) =>
// 		dispatch({ type: UPDATE_FIELD_EDITOR, key, value }),
// })

// class Editor extends React.Component {
// 	constructor() {
// 		super()
//
// 		const updateFieldEvent = (key) => (ev) =>
// 			this.props.onUpdateField(key, ev.target.value)
// 		this.changeTitle = updateFieldEvent('title')
// 		this.changeDescription = updateFieldEvent('description')
// 		this.changeBody = updateFieldEvent('body')
// 		this.changeTagInput = updateFieldEvent('tagInput')
//
// 		const updateFieldFileEvent = (key) => (ev) =>
// 			this.props.onUpdateField(key, ev.target.files[0])
// 		this.changeImage = updateFieldFileEvent('image')
//
// 		this.watchForEnter = (ev) => {
// 			if (ev.keyCode === 13) {
// 				ev.preventDefault()
// 				this.props.onAddTag()
// 			}
// 		}
//
// 		this.removeTagHandler = (tag) => () => {
// 			console.log(this.props)
// 			this.props.onRemoveTag(tag)
// 		}
//
// 		this.submitForm = (ev) => {
// 			ev.preventDefault()
// 			const article = {
// 				title: this.props.title,
// 				description: this.props.description,
// 				image: this.props.image,
// 				body: this.props.body,
// 				tagList: this.props.tagList,
// 			}
//
// 			const slug = { slug: this.props.articleSlug }
//
// 			console.log(article)
// 			const promise = this.props.articleSlug
// 				? agent.Articles.update(Object.assign(article, slug))
// 				: agent.Articles.create(article)
//
// 			this.props.onSubmit(promise)
// 		}
// 	}
//
// 	componentWillReceiveProps(nextProps) {
// 		if (this.props.match.params.slug !== nextProps.match.params.slug) {
// 			console.log('!!!!!!!!!!!!!!! componentWillReceiveProps !!!!!!!!!!!!!!', this.props, this.props.match.params)
// 			if (nextProps.match.params.slug) {
// 				this.props.onUnload()
// 				return this.props.onLoad(
// 					agent.Articles.get(this.props.match.params.slug)
// 				)
// 			}
// 			this.props.onLoad(null)
// 		}
// 	}
//
// 	componentWillMount() {
// 		if (this.props.match.params.slug) {
// 			console.log('!!!!!!!!!!!!!!! componentWillMount !!!!!!!!!!!!!!', this.props, this.props.match.params)
// 			return this.props.onLoad(agent.Articles.get(this.props.match.params.slug))
// 		}
// 		this.props.onLoad(null)
// 	}
//
// 	componentWillUnmount() {
// 		this.props.onUnload()
// 	}
//
// 	render() {
// 		return (
// 			<div className="editor-page">
// 				<div className="container page">
// 					<div className="row">
// 						<div className="col-md-10 offset-md-1 col-xs-12">
// 							<ListErrors errors={this.props.errors} />
//
// 							<form>
// 								<fieldset>
// 									<fieldset className="form-group">
// 										<input
// 											className="form-control form-control-lg"
// 											type="text"
// 											placeholder="Article Title"
// 											value={this.props.title || ''}
// 											onChange={this.changeTitle}
// 										/>
// 									</fieldset>
//
// 									<fieldset className="form-group">
// 										<input
// 											className="form-control form-control-lg"
// 											type="file"
// 											onChange={this.changeImage}
// 										/>
// 									</fieldset>
//
// 									<fieldset className="form-group">
// 										<input
// 											className="form-control"
// 											type="text"
// 											placeholder="What's this article about?"
// 											value={this.props.description || ''}
// 											onChange={this.changeDescription}
// 										/>
// 									</fieldset>
//
// 									<fieldset className="form-group">
// 										<textarea
// 											className="form-control"
// 											rows="8"
// 											placeholder="Write your article (in markdown)"
// 											value={this.props.body || ''}
// 											onChange={this.changeBody}
// 										></textarea>
// 									</fieldset>
//
// 									<fieldset className="form-group">
// 										<input
// 											className="form-control"
// 											type="text"
// 											placeholder="Enter tags"
// 											value={this.props.tagInput || ''}
// 											onChange={this.changeTagInput}
// 											onKeyUp={this.watchForEnter}
// 										/>
//
// 										<div className="tag-list">
// 											{(this.props.tagList || []).map((tag) => {
// 												return (
// 													<span className="tag-default tag-pill" key={tag}>
//                             <i
// 															className="ion-close-round"
// 															onClick={this.removeTagHandler(tag)}
// 														></i>
// 														{tag}
//                           </span>
// 												)
// 											})}
// 										</div>
// 									</fieldset>
//
// 									<button
// 										className="btn btn-lg pull-xs-right btn-primary"
// 										type="button"
// 										disabled={this.props.inProgress}
// 										onClick={this.submitForm}
// 									>
// 										Publish Article
// 									</button>
// 								</fieldset>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Editor)
