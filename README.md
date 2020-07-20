# kopeiky.js

If your're happy coding with js, proably see something like this:

```javascript
> 0.20 + 0.01
< 0.21000000000000002
```

This library can help with that

# Example

```javascript
import kopeiky from "./index";

kopeiky(0.2).add(0.01).toNormal();
```

Some trick:

```javascript
> kopeiky(1) + 1
< 2
```

# kopeiky API

## Factory

**kopeiky(number|kopeiky, {{ rank?: number }}): Kopeiky** - default rank is 2

## Instance Methods:

**add(number|kopeiky): Kopeiky** - add to current kopeiky  
**sub(number|kopeiky): Kopeiky** subtract to current kopeiky  
**muliply(number): Kopeiky** - muliply kopeiky  
**divide(number): Kopeiky** - divide kopeiky  
**clone(): Kopeiky** - return new instance of Kopeiky  
**valueOf(): number** - return primitive number  
**toNormal(): number** - return primitive number  
**toString(): string** - return a number using fixed-point notation
