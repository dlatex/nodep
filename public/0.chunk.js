webpackJsonp([0],{

/***/ "../../../../../src/app/components/videos/videoRouting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_components_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/videos/videos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var videosRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3_app_components_videos_videos_component__["a" /* VideosComponent */],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3_app_components_videos_videos_component__["a" /* VideosComponent */] }
                ]
            }
        ]
    }
];
var VideosRoutingModule = (function () {
    function VideosRoutingModule() {
    }
    return VideosRoutingModule;
}());
VideosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(videosRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], VideosRoutingModule);

//# sourceMappingURL=videoRouting.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"white-box\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosComponent = (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    return VideosComponent;
}());
VideosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-videos',
        template: __webpack_require__("../../../../../src/app/components/videos/videos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/videos/videos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VideosComponent);

//# sourceMappingURL=videos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/videos/videos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_components_videos_videos_component__ = __webpack_require__("../../../../../src/app/components/videos/videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_videos_videoRouting_module__ = __webpack_require__("../../../../../src/app/components/videos/videoRouting.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosModule", function() { return VideosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideosModule = (function () {
    function VideosModule() {
    }
    return VideosModule;
}());
VideosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2_app_components_videos_videoRouting_module__["a" /* VideosRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1_app_components_videos_videos_component__["a" /* VideosComponent */]],
        providers: []
    })
], VideosModule);

;
//# sourceMappingURL=videos.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map