"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6662],{4110:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return y}});var l=n(5392),a=n(2784);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",div:"div",pre:"pre",code:"code",h3:"h3",br:"br"},(0,l.ah)(),e.components),{RepositoryLink:n,BrandPrimaryText:r,BrandSecondaryText:o}=t;return r||c("BrandPrimaryText",!0),o||c("BrandSecondaryText",!0),n||c("RepositoryLink",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Autoplay"),"\n",a.createElement(n,{to:"https://github.com/davidjerleke/embla-carousel/tree/master/packages/embla-carousel-autoplay"},"View plugin on GitHub"),"\n",a.createElement(t.p,null,"This plugin is used to extend Embla Carousel with ",a.createElement(t.strong,null,"autoplay")," functionality. It comes with a useful set of options that allows you to customize it to your liking."),"\n",a.createElement(t.h2,{id:"installation",style:{position:"relative"}},a.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",a.createElement(t.p,null,"First you need to install the ",a.createElement(t.strong,null,"npm package")," and save it to your dependencies:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-autoplay --save\n")),"\n",a.createElement(t.p,null,"Alternatively, you can use a ",a.createElement(t.strong,null,"CDN")," to include it in your project:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-autoplay/embla-carousel-autoplay.umd.js"><\/script>\n')),"\n",a.createElement(t.h2,{id:"usage",style:{position:"relative"}},a.createElement(t.a,{href:"#usage","aria-label":"usage permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Usage"),"\n",a.createElement(t.p,null,"This plugin accepts a single optional parameter, which is its ",a.createElement(t.a,{href:"/plugins/autoplay/#options"},"options")," object that allows you to configure it. You maybe want to choose a ",a.createElement(t.strong,null,"custom root node")," for the autoplay plugin. This can be done with the ",a.createElement(t.a,{href:"/plugins/autoplay/#rootnode"},"rootNode")," options attribute. The root node will respond to interaction events and stop autoplay when a user interacts with the carousel. If this attribute is omitted, the Embla Carousel root node will be used as a default."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [Autoplay()]) // Add plugin\n")),"\n",a.createElement(t.h2,{id:"options",style:{position:"relative"}},a.createElement(t.a,{href:"#options","aria-label":"options permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Options"),"\n",a.createElement(t.p,null,"The Autoplay plugin accepts an optional ",a.createElement(t.strong,null,"options")," object as the first argument. Here's an example of how to make use of it:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"import EmblaCarousel from 'embla-carousel'\nimport Autoplay from 'embla-carousel-autoplay'\n\nconst autoplayOptions = {\n  delay: 4000,\n  rootNode: (emblaRoot) => emblaRoot.parentElement,\n}\n\nconst embla = EmblaCarousel(emblaRoot, { loop: false }, [\n  Autoplay(autoplayOptions), // Add plugin with options\n])\n")),"\n",a.createElement(t.h3,{id:"delay",style:{position:"relative"}},a.createElement(t.a,{href:"#delay","aria-label":"delay permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"delay"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"number")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"4000"))),"\n",a.createElement(t.p,null,"Delay between transitions in milliseconds."),"\n",a.createElement(t.h3,{id:"jump",style:{position:"relative"}},a.createElement(t.a,{href:"#jump","aria-label":"jump permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"jump"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"false"))),"\n",a.createElement(t.p,null,"When set to true ",a.createElement(t.code,null,"true"),", autoplay will do instant slide transitions when advancing."),"\n",a.createElement(t.h3,{id:"playoninit",style:{position:"relative"}},a.createElement(t.a,{href:"#playoninit","aria-label":"playoninit permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"playOnInit"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"true"))),"\n",a.createElement(t.p,null,"If set to ",a.createElement(t.code,null,"false"),", you'll have to start autoplay yourself by calling the ",a.createElement(t.a,{href:"/plugins/autoplay/#play"},"play")," method."),"\n",a.createElement(t.h3,{id:"stoponinteraction",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponinteraction","aria-label":"stoponinteraction permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnInteraction"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"true"))),"\n",a.createElement(t.p,null,"If set to ",a.createElement(t.code,null,"false"),", autoplay will not be disabled after drag interactions, and it will restart every time after the interaction."),"\n",a.createElement(t.h3,{id:"stoponmouseenter",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponmouseenter","aria-label":"stoponmouseenter permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnMouseEnter"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"false"))),"\n",a.createElement(t.p,null,"When enabled, autoplay will pause when a mouse pointer enters the Embla Carousel container. If ",a.createElement(t.a,{href:"/plugins/autoplay/#stoponinteraction"},"stopOnInteraction")," is also enabled, it will stop autoplay entirely instead of pausing it."),"\n",a.createElement(t.h3,{id:"stoponlastsnap",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponlastsnap","aria-label":"stoponlastsnap permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnLastSnap"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"false"))),"\n",a.createElement(t.p,null,"If this parameter is enabled, autoplay will be stopped when it reaches last slide."),"\n",a.createElement(t.h3,{id:"rootnode",style:{position:"relative"}},a.createElement(t.a,{href:"#rootnode","aria-label":"rootnode permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"rootNode"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(r,null,a.createElement(t.code,null,"(emblaRoot: HTMLElement) => HTMLElement | null")),a.createElement(t.br),"\n","Default: ",a.createElement(o,null,a.createElement(t.code,null,"null"))),"\n",a.createElement(t.p,null,"The node that should respond to user interactions like ",a.createElement(t.a,{href:"/plugins/autoplay/#stoponmouseenter"},"stopOnMouseEnter")," and ",a.createElement(t.a,{href:"/plugins/autoplay/#stoponinteraction"},"stopOnInteraction"),"."),"\n",a.createElement(t.h2,{id:"methods",style:{position:"relative"}},a.createElement(t.a,{href:"#methods","aria-label":"methods permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Methods"),"\n",a.createElement(t.p,null,"The Autoplay plugin exposes a set of ",a.createElement(t.strong,null,"useful methods")," which lets you control it. Assuming you've passed the plugin to the Embla Carousel constructor, a method is called like demonstrated below:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"embla.plugins().autoplay.stop() // Method\n")),"\n",a.createElement(t.h3,{id:"play",style:{position:"relative"}},a.createElement(t.a,{href:"#play","aria-label":"play permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"play"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(r,null,a.createElement(t.code,null,"jump?: boolean")),a.createElement(t.br),"\n","Returns: ",a.createElement(o,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"Start autoplay. Set the ",a.createElement(t.strong,null,"jump")," parameter to ",a.createElement(t.code,null,"true")," when you want autoplay to do instant slide transitions when advancing. Please note that providing a value to this method vill override the ",a.createElement(t.a,{href:"/plugins/autoplay/#jump"},"jump")," option."),"\n",a.createElement(t.h3,{id:"stop",style:{position:"relative"}},a.createElement(t.a,{href:"#stop","aria-label":"stop permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stop"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(r,null,a.createElement(t.code,null,"none")),a.createElement(t.br),"\n","Returns: ",a.createElement(o,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"Stop autoplay."),"\n",a.createElement(t.h3,{id:"reset",style:{position:"relative"}},a.createElement(t.a,{href:"#reset","aria-label":"reset permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"reset"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(r,null,a.createElement(t.code,null,"none")),a.createElement(t.br),"\n","Returns: ",a.createElement(o,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"If ",a.createElement(t.a,{href:"/plugins/autoplay/#stoponinteraction"},"stopOnInteraction")," is set to ",a.createElement(t.code,null,"false"),", this will restart the autoplay timer. If not, this method stops autoplay."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(4234),s=n(3785),m=n(8116),u=n(6892),p=n(4453),d=n(3376),h=n(6993),E=n(8944),g=n(9387);const v=e=>{const{data:t,pageContext:n}=e,{siteUrl:l,author:r}=(0,m.$)(),{title:o,description:c,date:u}=t.mdx.frontmatter,p=(0,a.useMemo)((()=>new Date(u+" UTC").toISOString()),[u]);return a.createElement(i.p,{title:o,description:c,url:""+l+n.slug},a.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,E.P)(l)+'",\n        "description": "'+c+'",\n        "url": "'+l+n.slug+'",\n        "headline": "'+o+'",\n        "image": "'+l+'/share-image.png",\n        "datePublished": "'+p+'",\n        "dateModified": "'+p+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+r+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+r+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+l+s.Z+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:l,previous:r,filePath:o,id:c}=t;return a.createElement(a.Fragment,null,a.createElement(d.O,{id:c}),a.createElement("article",{id:h.X},a.createElement(g.i,null,n)),a.createElement(u.e,{pageUrl:o}),a.createElement(p.t,{previous:r,next:l}))};function y(e){return a.createElement(f,e,a.createElement(o,e))}},3376:function(e,t,n){n.d(t,{O:function(){return v}});var l=n(2784),a=n(1195),r=n(5668),o=(n(7694),n(4049)),c=n(5211);var i=n(6807),s=n(7042),m=n(727),u=n(127);const p=a.default.nav.withConfig({displayName:"Breadcrumbs__Wrapper",componentId:"sc-1peavte-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],m.u.COMPLEMENTARY,u.v.THREE),d=(0,a.css)(["color:",";padding:"," 0;"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),h=(0,a.default)(r.S).withConfig({displayName:"Breadcrumbs__Link",componentId:"sc-1peavte-1"})(["",";"],d),E=a.default.span.withConfig({displayName:"Breadcrumbs__ActiveTitle",componentId:"sc-1peavte-2"})(["",";"],d),g=(0,a.default)(i.J).withConfig({displayName:"Breadcrumbs__Separator",componentId:"sc-1peavte-3"})(["color:",";margin:0 ",";"],s.DM.TEXT_LOW_CONTRAST,u.v.ONE),v=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,c.V)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,o.D)(e,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:l.createElement(p,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:a,slug:r,title:o}=e;return t!==n.length-1?l.createElement(l.Fragment,{key:a},l.createElement(h,{to:r},o),l.createElement(g,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):l.createElement(E,{key:a},o)})))}},6892:function(e,t,n){n.d(t,{e:function(){return p}});var l=n(2784),a=n(1195),r=n(5668),o=n(7042),c=n(727),i=n(127),s=n(2657),m=n(6722);const u=(0,a.default)(r.S).withConfig({displayName:"EditPage__Wrapper",componentId:"sc-1cx5u1t-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],c.u.COMPLEMENTARY,i.v.ONE,i.v.ONE,i.v.EIGHT,o.DM.TEXT_LOW_CONTRAST),p=e=>{const{pageUrl:t}=e,n=s.n.GITHUB_DOCUMENTATION+"/"+t;return l.createElement(u,{to:n},l.createElement(m.M,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},4453:function(e,t,n){n.d(t,{t:function(){return g}});var l=n(2784),a=n(1195),r=n(5668),o=n(7697),c=n(7042),i=n(127),s=n(6722);const m=i.v.FOUR,u=a.default.nav.withConfig({displayName:"Pagination__Wrapper",componentId:"sc-gw2f46-0"})(["display:flex;justify-content:space-between;margin-top:",";margin-left:-",";"],i.v.EIGHT,m),p=a.default.div.withConfig({displayName:"Pagination__Item",componentId:"sc-gw2f46-1"})(["padding-left:",";> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],m,c.DM.BRAND_PRIMARY,c.DM.BRAND_SECONDARY),d=a.default.div.withConfig({displayName:"Pagination__ItemLabel",componentId:"sc-gw2f46-2"})(["color:",";padding-bottom:",";"],c.DM.TEXT_LOW_CONTRAST,i.v.ONE),h=a.default.div.withConfig({displayName:"Pagination__ItemTitle",componentId:"sc-gw2f46-3"})(["display:inline-flex;align-items:center;font-weight:500;"]),E=a.default.span.withConfig({displayName:"Pagination__GradientText",componentId:"sc-gw2f46-4"})(["",";"],o.W),g=e=>{const{next:t,previous:n}=e;return l.createElement(u,{"aria-label":"Pagination Navigation"},l.createElement(p,null,n&&l.createElement(r.S,{to:n.slug},l.createElement(d,null,"Previous"),l.createElement(h,null,l.createElement(s.M,{iconSvg:"arrowLeft"},l.createElement(E,null,n.title))))),l.createElement(p,null,t&&l.createElement(r.S,{to:t.slug},l.createElement(d,null,"Next"),l.createElement(h,null,l.createElement(s.M,{iconSvg:"arrowRight",iconSide:"right"},l.createElement(E,null,t.title))))))}},4234:function(e,t,n){n.d(t,{p:function(){return o}});var l=n(2784),a=n(8116),r=n(8944);const o=e=>{const{title:t,description:n,lang:o="en",url:c,children:i}=e,s=(0,a.$)(),m=n||s.description;return l.createElement(l.Fragment,null,l.createElement("html",{lang:o}),l.createElement("title",null,t," | Embla Carousel"),l.createElement("link",{rel:"canonical",href:c}),l.createElement("meta",{name:"description",content:m}),l.createElement("meta",{name:"og:title",content:t}),l.createElement("meta",{name:"og:description",content:m}),l.createElement("meta",{name:"og:type",content:"article"}),l.createElement("meta",{name:"og:locale",content:"en_EN"}),l.createElement("meta",{name:"og:url",content:c}),l.createElement("meta",{name:"og:site_name",content:(0,r.P)(s.siteUrl)}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:s.author}),l.createElement("meta",{name:"twitter:title",content:t}),l.createElement("meta",{name:"twitter:description",content:m}),i)}},8944:function(e,t,n){n.d(t,{P:function(){return l}});const l=e=>e.replace(/(^\w+:|^)\/\//,"")},3785:function(e,t,n){t.Z=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-page-tsx-content-file-path-users-davidjerleke-sites-embla-carousel-packages-embla-carousel-docs-src-content-pages-plugins-autoplay-md-54c5ed294983a98eddb9.js.map