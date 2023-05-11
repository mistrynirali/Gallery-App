import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, isActive, updateActiveImageId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailItem
  const activeClassName = isActive ? 'blur-img' : ''

  const onClickImage = () => {
    updateActiveImageId(id)
  }
  return (
    <li className={`thumbnail ${activeClassName}`}>
      <button type="button" className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={onClickImage} />
      </button>
    </li>
  )
}
export default ThumbnailItem
