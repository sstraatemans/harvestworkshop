const template = document.createElement('template');

template.innerHTML = `
  <style>
    .list {
  list-style: none;
  padding: 0;
}

.list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 40px;
  border-bottom: 1px solid lightgray;
}

.list li button {
  cursor: pointer;
}
  </style>

    <ul class="list"></ul>

`;

class TodoList extends HTMLElement {
  constructor() {
    super();
    this.createItem = this.createItem.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }
  connectedCallback() {
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this.values = ['Create CSS', 'Add CSS to an external stylesheet', '???', 'Profit!'];

    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.list = this._shadowRoot.querySelector('ul');

    this.values.map(this.createItem);
  }

  static get observedAttributes() {
    return ['item'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.values = [...this.values, newVal];
    this.createItem(newVal);
  }

  createItem(val) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'delete';
    li.innerText = val;
    li.key = val;
    li.appendChild(button);
    this.list.appendChild(li);

    button.addEventListener('click', this.removeElement);
  }

  removeElement(e) {
    const value = e.target.parentElement.key;
    const idx = this.values.indexOf(value);
    console.log(idx);
    this.values.splice(idx, 1);

    const liElms = this.list.querySelectorAll('li');
    liElms.forEach((li) => {
      li.remove();
    });

    this.values.map(this.createItem);
  }
}

customElements.define('todo-list', TodoList);
