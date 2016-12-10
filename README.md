# ng2-spinning-preloader

Animate Angular2 compilation process by using `ng2-spinning-preloader` service.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Example](#examples)

## Installation

```sh
npm install --save ng2-spinning-preloader
```

## Quick Start

Import the `NgSpinningPreloader` class and add it to your application module as an `import`. Once you've done this, you'll be able to inject `NgSpinningPreloader' into your Angular2 Components.

```typescript
import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@NgModule({
  /* ... */
  providers: [ NgSpinningPreloader ]
})

export class AppModule {}
```
Insert in your index.html `spinning-preloader` element

```html
<body>
	<div class="spinner-preloader-container">
		<div class="spinner-preloader-elements"></div>
	</div>
	<app></app>
</body>
```

## Example
```typescript
import {
  Component,
  OnInit
} from '@angular/core';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@Component({
  selector: 'app',
  template: 'App component'
})

export class AppComponent implements OnInit {
  constructor(private ngSpinningPreloader: NgSpinningPreloader) {}

  ngOnInit() {
    this.ngSpinningPreloader.stop();
  }
}
```