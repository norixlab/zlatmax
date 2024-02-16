

const Location = ({color='#000'}) => {
  return (
      <svg
          width="17"
          height="25"
          viewBox="0 0 17 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.5 0C3.8131 0 0 3.85087 0 8.5842C0 10.1834 0.438647 11.7441 1.26881 13.0982L8.01616 24.0791C8.14541 24.2895 8.37311 24.4173 8.61801 24.4173C8.6199 24.4173 8.62174 24.4173 8.62363 24.4173C8.87065 24.4153 9.09883 24.2836 9.22571 24.0695L15.8011 12.9822C16.5854 11.6568 17 10.136 17 8.5842C17 3.85087 13.1869 0 8.5 0ZM14.5853 12.2477L8.60729 22.3278L2.47289 12.3444C1.78188 11.2174 1.40722 9.91714 1.40722 8.5842C1.40722 4.63976 4.59425 1.42116 8.5 1.42116C12.4058 1.42116 15.5881 4.63976 15.5881 8.5842C15.5881 9.87761 15.2381 11.1446 14.5853 12.2477Z"
              fill={color}
          />
          <path
              d="M8.49671 3.61737C5.89284 3.61737 3.77441 5.64581 3.77441 8.13909C3.77441 10.6164 5.85836 12.6608 8.49671 12.6608C11.1676 12.6608 13.219 10.5892 13.219 8.13909C13.219 5.64581 11.1006 3.61737 8.49671 3.61737ZM8.49671 11.1636C6.75172 11.1636 5.33802 9.80544 5.33802 8.13909C5.33802 6.47691 6.76079 5.11456 8.49671 5.11456C10.2326 5.11456 11.6502 6.47691 11.6502 8.13909C11.6502 9.78113 10.2694 11.1636 8.49671 11.1636Z"
              fill={color}
          />
      </svg>
  );
}

export default Location