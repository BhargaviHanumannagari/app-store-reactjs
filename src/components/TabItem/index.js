// Write your code here
import './index.css'

const TabItem = props => {
  const {appDetails, clickTabItem, isActive} = props
  const {appId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(appId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
