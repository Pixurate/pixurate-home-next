(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2527:
/***/ ((module) => {

// Exports
module.exports = {
	"mainContainer": "home_mainContainer__2d7Wz"
};


/***/ }),

/***/ 3220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../../../.nvm/versions/node/v16.10.0/lib/node_modules/next/dist/styled-jsx/style.js
var style = __webpack_require__(9931);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ../../../../.nvm/versions/node/v16.10.0/lib/node_modules/next/head.js
var head = __webpack_require__(2982);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./styles/home.module.scss
var home_module = __webpack_require__(2527);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./pages/index.js







const Home = ()=>{
    const { 0: isMobileMenuActive , 1: setMobileMenuActive  } = (0,external_react_.useState)(false);
    const { 0: isHeaderFix , 1: setHeaderFix  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.onscroll = function() {
            headerScroll();
        };
        headerScroll();
    }, []);
    const headerScroll = ()=>{
        var header = document.getElementById("my-header");
        var headerOffset = header.offsetHeight;
        if (window.pageYOffset > headerOffset) setHeaderFix(true);
        else setHeaderFix(false);
    };
    const updateMobileMenuActive = ()=>{
        setMobileMenuActive(!isMobileMenuActive);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-5f7975e470b1ebb4",
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true,
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                        rel: "stylesheet",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap",
                        rel: "stylesheet",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                        crossOrigin: "anonymous",
                        className: "jsx-5f7975e470b1ebb4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                        crossOrigin: "anonymous",
                        className: "jsx-5f7975e470b1ebb4"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-5f7975e470b1ebb4" + " " + ((home_module_default()).mainContainer || ""),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        id: "my-header",
                        className: "jsx-5f7975e470b1ebb4" + " " + `my-header ${isHeaderFix && "fixed"}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-5f7975e470b1ebb4" + " " + "container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5f7975e470b1ebb4" + " " + "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/logo.png",
                                            alt: "logo",
                                            className: "jsx-5f7975e470b1ebb4"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5f7975e470b1ebb4" + " " + "menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "jsx-5f7975e470b1ebb4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "jsx-5f7975e470b1ebb4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: "NFTs"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "jsx-5f7975e470b1ebb4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: "Influencers"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "jsx-5f7975e470b1ebb4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "",
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: "Tokens"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-5f7975e470b1ebb4" + " " + "menu",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "",
                                                            className: "jsx-5f7975e470b1ebb4",
                                                            children: "Login"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "jsx-5f7975e470b1ebb4",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "",
                                                            className: "jsx-5f7975e470b1ebb4" + " " + "active",
                                                            children: "Sign up"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                onClick: ()=>updateMobileMenuActive(),
                                                className: "jsx-5f7975e470b1ebb4" + " " + "toggle",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsList, {})
                                            })
                                        ]
                                    })
                                ]
                            }),
                            isMobileMenuActive && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-5f7975e470b1ebb4" + " " + "mobile-menu",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "jsx-5f7975e470b1ebb4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Product tour"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Science"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Test library"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Pricing"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Login"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "active",
                                                children: "Request demo"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "jsx-5f7975e470b1ebb4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Try for free!"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "jsx-5f7975e470b1ebb4" + " " + "welcome",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-5f7975e470b1ebb4" + " " + "texts",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "jsx-5f7975e470b1ebb4",
                                        children: [
                                            "Get your store r eady for the future ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "Ultimate Customer Engagement with NFTs"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-5f7975e470b1ebb4",
                                        children: "Pixurate provides ECommerce owners with seamlessly integrated Blockchain solutions to ace customer engagement."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-5f7975e470b1ebb4",
                                        children: "Prepare your store for the future of social commerce and Web3."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-5f7975e470b1ebb4" + " " + "actions",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-5f7975e470b1ebb4",
                                        children: [
                                            "I’m a ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "business owner"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsCaretDownFill, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-5f7975e470b1ebb4",
                                        children: [
                                            "I’m interested with ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "jsx-5f7975e470b1ebb4",
                                                children: "NFT"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsCaretDownFill, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-5f7975e470b1ebb4" + " " + "add-wait-list",
                                        children: "+ Add me waitlist"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "jsx-5f7975e470b1ebb4" + " " + "generate",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-5f7975e470b1ebb4" + " " + "content custom-tabs",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    id: "pills-tab",
                                    role: "tablist",
                                    className: "jsx-5f7975e470b1ebb4" + " " + "nav nav-pills mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "generate-first-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#generate-first",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "generate-first",
                                                "aria-selected": "true",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link active",
                                                children: "Generate NFTs"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "generate-two-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#generate-two",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "generate-two",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Incentivize Customers"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "generate-three-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#generate-three",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "generate-three",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Improve Social Media Presence"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "generate-four-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#generate-four",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "generate-four",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Collect Authentic Reviews"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "generate-five-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#generate-five",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "generate-five",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Build a Community"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "pills-tabContent",
                                    className: "jsx-5f7975e470b1ebb4" + " " + "tab-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "generate-first",
                                            role: "tabpanel",
                                            "aria-labelledby": "pills-home-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade show active",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                            children: "Pixurate generates AI-powered NFTs for any product or service on your store"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "before",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/generate/generate1.png",
                                                                    className: "jsx-5f7975e470b1ebb4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/arrow.png",
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-5f7975e470b1ebb4" + " " + "transform",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                className: "jsx-5f7975e470b1ebb4",
                                                                                children: [
                                                                                    "from Real Product ",
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "jsx-5f7975e470b1ebb4",
                                                                                        children: [
                                                                                            "to ",
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                                                className: "jsx-5f7975e470b1ebb4",
                                                                                                children: "NFT"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                                className: "jsx-5f7975e470b1ebb4"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                                className: "jsx-5f7975e470b1ebb4"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "jsx-5f7975e470b1ebb4" + " " + "round",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "/img/short_logo.png",
                                                                                    className: "jsx-5f7975e470b1ebb4"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "after",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/generate/generate2.png",
                                                                    className: "jsx-5f7975e470b1ebb4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "generate-two",
                                            role: "tabpanel",
                                            "aria-labelledby": "pills-profile-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Incentivize your customers for engagement;"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    className: "jsx-5f7975e470b1ebb4",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "jsx-5f7975e470b1ebb4",
                                                                            children: "to improve social media presence and reach out to your customer’s network,"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                            className: "jsx-5f7975e470b1ebb4",
                                                                            children: "“to collect feedback and highlight customer experience.”"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/generate/incetivize1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "generate-three",
                                            role: "tabpanel",
                                            "aria-labelledby": "generate-three-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                            children: "Reach out to your customers’ social media network. Do not spend a fortune on social media ads."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/generate/social1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "generate-four",
                                            role: "tabpanel",
                                            "aria-labelledby": "generate-four-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                            children: "“Collect authentic reviews from your customers and promote your best products.”"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/generate/collect1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "generate-five",
                                            role: "tabpanel",
                                            "aria-labelledby": "generate-five-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "jsx-5f7975e470b1ebb4" + " " + "text",
                                                            children: "“Build and connect with your community of loyal customers.”"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/generate/community1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "jsx-5f7975e470b1ebb4" + " " + "purchase",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-5f7975e470b1ebb4" + " " + "content custom-tabs",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    id: "pills-tab",
                                    role: "tablist",
                                    className: "jsx-5f7975e470b1ebb4" + " " + "nav nav-pills mb-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "purchase-one-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#purchase-one",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "purchase-one",
                                                "aria-selected": "true",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link active",
                                                children: "Prooven purchase"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "purchase-two-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#purchase-two",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "purchase-two",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Trusted Reviews"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "purchase-three-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#purchase-three",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "purchase-three",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Customer Incentives"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            role: "presentation",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                id: "purchase-four-tab",
                                                "data-bs-toggle": "pill",
                                                "data-bs-target": "#purchase-four",
                                                type: "button",
                                                role: "tab",
                                                "aria-controls": "purchase-four",
                                                "aria-selected": "false",
                                                className: "jsx-5f7975e470b1ebb4" + " " + "nav-link",
                                                children: "Community"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "pills-tabContent",
                                    className: "jsx-5f7975e470b1ebb4" + " " + "tab-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "purchase-one",
                                            role: "tabpanel",
                                            "aria-labelledby": "purchase-one-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade show active",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Purchase verification"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Transparent and secure. NFTs include purchase metadata. NFT owners are verified customers by blockchain."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "join-beta-button",
                                                                children: [
                                                                    "Join Beta ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowRight, {})
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/purchase/purchase1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "purchase-two",
                                            role: "tabpanel",
                                            "aria-labelledby": "purchase-two-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Trusted reviews"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: [
                                                                    "Genuine Customer Feedback ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Transparent on Blockchain ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Indirect Feedback Incentives ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "High Feedback Frequency ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Review Upvote ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Universal Rating Scale ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Pure Information - Real Ratings (Not Inflated) ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Review&Rating Widgets"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "join-beta-button",
                                                                children: [
                                                                    "Join Beta ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowRight, {})
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/purchase/trusted1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "purchase-three",
                                            role: "tabpanel",
                                            "aria-labelledby": "purchase-three-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Customer Incentives"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "join-beta-button",
                                                                children: [
                                                                    "Join Beta ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowRight, {})
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/purchase/customer1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "purchase-four",
                                            role: "tabpanel",
                                            "aria-labelledby": "purchase-four-tab",
                                            className: "jsx-5f7975e470b1ebb4" + " " + "tab-pane fade",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-5f7975e470b1ebb4" + " " + "content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: "Community"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "jsx-5f7975e470b1ebb4",
                                                                children: [
                                                                    "FOMO effect ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Feedback ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Sharable ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Insight about product ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                                        className: "jsx-5f7975e470b1ebb4"
                                                                    }),
                                                                    "Influencer engagement"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-5f7975e470b1ebb4" + " " + "join-beta-button",
                                                                children: [
                                                                    "Join Beta ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowRight, {})
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-5f7975e470b1ebb4" + " " + "right",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/purchase/community1.png",
                                                            className: "jsx-5f7975e470b1ebb4"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5f7975e470b1ebb4",
                children: '*{padding:0;margin:0}body{font-family:"Poppins",sans-serif}@media only screen and (max-width:1200px){html{font-size:1.3vw}}@media only screen and (max-width:768px){html{font-size:16px}}@media only screen and (max-width:400px){html{font-size:4vw}}'
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 9931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1892).style


/***/ }),

/***/ 2982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4957)


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 1892:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/styled-jsx/dist/index/index.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3220));
module.exports = __webpack_exports__;

})();