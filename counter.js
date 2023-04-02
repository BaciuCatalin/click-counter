console.log("counter.js loaded...");

class ClickCounter {
  constructor(parentElementRef) {
    this.counter = 0;
    this.parentElementRef = parentElementRef;
    this.display();
  }

  display() {
    this.header = document.createElement(`header`);
    this.parentElementRef.appendChild(this.header);

    this.title = document.createElement(`h1`);
    this.title.classList.add(`title`);
    this.title.innerText = `counter`;
    this.header.appendChild(this.title);

    this.counterDisplay = document.createElement(`main`);
    // this.counterDisplay.classList.add(`main`);
    this.parentElementRef.appendChild(this.counterDisplay);

    this.counterSection = document.createElement(`section`);
    this.counterSection.classList.add(`counterSection`);
    this.counterDisplay.appendChild(this.counterSection);

    this.buttonPlus = document.createElement(`button`);
    this.buttonPlus.classList.add(`button`);
    this.buttonPlus.innerText = `click + `;
    this.counterSection.appendChild(this.buttonPlus);

    this.displaySpan = document.createElement(`span`);
    // this.displaySpan.classList.add(`span`);
    this.counterSection.appendChild(this.displaySpan);

    this.buttonMinus = document.createElement(`button`);
    this.buttonMinus.classList.add(`button`);
    this.buttonMinus.innerText = ` - click `;
    this.counterSection.appendChild(this.buttonMinus);

    this.deleteSection = document.createElement(`section`);
    this.counterDisplay.appendChild(this.deleteSection);

    this.buttonDelete = document.createElement(`button`);
    this.buttonDelete.classList.add(`buttonDelete`);
    this.buttonDelete.innerText = `clear`;
    this.deleteSection.appendChild(this.buttonDelete);

    this.buttonPlus.addEventListener("click", () => {
      this.addClicks();
    });

    this.buttonMinus.addEventListener("click", () => {
      this.reduceClicks();
    });

    // this.buttonMinus.addEventListener("click", () => {
    //   if (this.counter > 0) {
    //     this.reduceClicks();
    //   } else {
    //     alert("Counter cannot be lower that zero");
    //   }
    // });

    this.buttonDelete.addEventListener("click", () => {
      this.clearClick();
    });
    this.displayClicks();
  }

  addClicks() {
    this.counter += 1;
    this.displayClicks();
  }

  reduceClicks() {
    this.counter -= 1;
    this.displayClicks();
  }

  clearClick() {
    this.counter = 0;
    this.displayClicks();
  }

  displayClicks() {
    this.displaySpan.innerText = this.counter;
  }
}
