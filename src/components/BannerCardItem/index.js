import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div className="inside-card-text">
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
