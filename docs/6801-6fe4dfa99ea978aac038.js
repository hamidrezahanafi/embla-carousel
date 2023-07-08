"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6801],{6801:function(e,n,o){o.r(n),n.default="import EmblaCarousel from 'embla-carousel';\nimport { setupInfiniteScroll, mockApiCall, SLIDE_TEMPLATE, createHTMLFromString } from './infinite-scroll';\nimport '../css/base.css';\nimport '../css/sandbox.css';\nimport '../css/embla.css';\n\nconst OPTIONS = {};\n\nconst emblaNode = document.querySelector('.embla');\nconst viewportNode = emblaNode.querySelector('.embla__viewport');\n\nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS);\n\nconst onResize = () => emblaApi.reInit();\nconst startInfiniteScroll = setupInfiniteScroll(emblaApi, (loadMore, endInfiniteScroll, slideCount) => {\n    mockApiCall(1000, 2000, () => {\n        if (slideCount === 20)\n            return endInfiniteScroll();\n        \n        const fiveNewSlideNodes = Array.from(Array(5).keys());\n        const slideNodesToAdd = fiveNewSlideNodes\n            .map(() => SLIDE_TEMPLATE)\n            .map((template, index) => {\n            const imageNumber = (index % 4) + 1;\n            return template.replace('__IMG_NUMBER__', imageNumber.toString());\n        })\n            .map((template, index) => {\n            const slideNumber = slideCount + index + 1;\n            return template.replace('__SLIDE_NUMBER__', slideNumber.toString());\n        })\n            .map(createHTMLFromString);\n        \n        loadMore(slideNodesToAdd);\n    });\n});\n\nemblaApi.on('init', startInfiniteScroll);\nemblaApi.on('destroy', () => {\n    window.removeEventListener('resize', onResize);\n});\nwindow.addEventListener('resize', onResize);\n"}}]);
//# sourceMappingURL=6801-6fe4dfa99ea978aac038.js.map