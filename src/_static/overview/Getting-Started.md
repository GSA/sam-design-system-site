# Getting Started

The SAM.gov Web Design System is an open source project maintained as part of the [beta.SAM.gov](https://beta.SAM.gov) program.

## Mobile Friendly
Our aim is to provide a set of components that work across desktop, tablet, and mobile devices. We use responsive design to automatically scale page layouts to adjust based on browser size.

## Accessibility
The SAM Design System meets the WCAG 2.0 AA accessibility guidelines and conforms to the standards of Section 508 of the Rehabilitation Act. Please reach out to us for more discussion.

## Security
We take security seriously as a project supported by the US Federal Government. If a security vulnerability is discovered, we will work to remediate it and publish a patch as quickly as possible. If you discover any issues with our components, please send a brief description of the problem to support@gsa.gov.

### For Developers
With npm:

```bash
npm install @gsa-sam/sam-ui-elements
```

Import your desired module into your angular application

```typescript
import { SamModalModule } from ‘@gsa-sam/sam-ui-elements’;

@NgModule({
  declarations: [ ... ],
  imports: [
    SamModalModule,
  ],
  providers: [ … ]
})
export class AppModule { }
```

Then use the component in templates as desired:

```html
<sam-modal>
    . . .You can find examples using sam-modal in the components documnetation section. . . 
</sam-modal>
```

Our source code can be found here at the [sam-ui-elements Github repository](https://github.com/GSA/sam-ui-elements)

### Technology
* Angular 4 (current)/Typescript
* USWDS Grid

### UI Control Dependencies
* Angular CDK Table (experimental)
* Simple MDE Text Editor (experimental)
* Paypal Open Source Video Player

