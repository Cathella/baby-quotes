import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ "list" ]

  addHelloWorld() {
    const listE1 = this.listTarget
    var itemE1 = document.createElement("li");
    itemE1.innerHTML = "Hello World from a Stimulus controller!";
    listE1.appendChild(itemE1);
  }
}