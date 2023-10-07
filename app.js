const products = [
  {
    id: 1,
    title: 'Lenovo Yoga',
    price: 3000,
  },
  {
    id: 2,
    title: 'Acer Aspire',
    price: 1800,
  },
  {
    id: 3,
    title: 'Dell Vostro',
    price: 3400,
  },
]

let order = []

/**
 * Добавляет товар в корзину покупок.
 * @param {number} productId - id продукта, который нужно добавить.
 * @returns {void}
 */
function addToBasket(productId) {
  // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
  const orderItem = order.find((item) => item.id === productId)
  if (orderItem) {
    alert('Товар уже есть в корзине')
  } else {
    order = [...order, products.find((item) => item.id === productId)]
  }
  // TODO: если товар еще не в корзине, добавить его из массива products
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart()
  rerenderTotalPrice()
}

/**
 * Удаляет товар из корзины покупок.
 * @param {number} productId - id продукта, который нужно удалить.
 * @returns {void}
 */
function removeFromBasket(productId) {
  // TODO: описать логику удаления товара из корзины
  order = order.filter((item) => item.id !== productId)
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart()
  rerenderTotalPrice()
}

/**
 * Вычисляет общую стоимость корзины покупок.
 * @returns {void}
 */
function rerenderTotalPrice() {
  // TODO: опишите функционал подсчета общей стоимости заказа
  const totalPrice = order.reduce((acc, currVal) => acc + currVal.price, 0)
  // Не меняйте эту строчку
  document.getElementById('total').innerText = totalPrice
}

// Этот метод остается без изменений
/**
 * Отображает корзину покупок.
 * @returns {void}
 */
function renderCart() {
  const cart = document.getElementById('basket-items')

  cart.innerHTML = ''
  order.forEach((item) => {
    const el = document.createElement('li')
    el.innerText = item.title
    el.onclick = () => removeFromBasket(item.id)
    cart.appendChild(el)
  })
}
