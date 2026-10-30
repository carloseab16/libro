/* @ds-bundle: {"format":4,"namespace":"ShadcnMobileDesignSystem_1fa5e1","components":[{"name":"AppBar","sourcePath":"components/AppBar/AppBar.jsx"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/BrandMark/BrandMark.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"CardRow","sourcePath":"components/CardRow/CardRow.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"Sheet","sourcePath":"components/Sheet/Sheet.jsx"}],"sourceHashes":{"components/AppBar/AppBar.jsx":"181a19ce883e","components/Badge/Badge.jsx":"e19797d0aee0","components/BrandMark/BrandMark.jsx":"ad80b023e518","components/Button/Button.jsx":"68b25eb68440","components/CardRow/CardRow.jsx":"1bd4a7725827","components/Input/Input.jsx":"f71bcb765f35","components/Sheet/Sheet.jsx":"968b4307c4e8","ui_kits/mobile/payment-app.jsx":"f540a0d76429"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShadcnMobileDesignSystem_1fa5e1 = window.ShadcnMobileDesignSystem_1fa5e1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/AppBar/AppBar.jsx
try { (() => {
function AppBar({
  title,
  onBack,
  right
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'grid',
      gridTemplateColumns: '56px 1fr 56px',
      alignItems: 'center',
      borderBottom: '1px solid #e4e4e7',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": "Back",
    style: {
      background: hover ? '#f4f4f5' : 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      width: 44,
      height: 44,
      borderRadius: 8,
      color: '#09090b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-chevron-left",
    style: {
      fontSize: 24
    }
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px/22px var(--font-sans)',
      letterSpacing: '-.01em',
      color: '#09090b',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 6
    }
  }, right));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/AppBar/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
const BADGE = {
  default: {
    background: '#09090b',
    color: '#fff'
  },
  secondary: {
    background: '#f4f4f5',
    color: '#09090b'
  },
  outline: {
    background: '#fff',
    color: '#09090b',
    borderColor: '#e4e4e7'
  },
  destructive: {
    background: '#ef4444',
    color: '#fff'
  },
  success: {
    background: '#16a34a',
    color: '#fff'
  },
  warning: {
    background: '#f59e0b',
    color: '#fff'
  },
  accent: {
    background: '#C54600',
    color: '#fff'
  }
};
function Badge({
  variant = 'default',
  children
}) {
  const v = BADGE[variant] || BADGE.default;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: '600 12px/16px var(--font-sans)',
      padding: '2px 10px',
      borderRadius: 9999,
      border: '1px solid ' + (v.borderColor || 'transparent'),
      background: v.background,
      color: v.color,
      whiteSpace: 'nowrap'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/BrandMark/BrandMark.jsx
try { (() => {
const BRANDS = {
  visa: {
    bg: '#1A1F71',
    label: 'VISA'
  },
  amex: {
    bg: '#2E77BC',
    label: 'AMEX'
  },
  discover: {
    bg: '#F47216',
    label: 'DISC'
  },
  paypal: {
    bg: '#003087',
    label: 'PP'
  },
  apple: {
    bg: '#000',
    label: 'Pay'
  }
};
function BrandMark({
  brand = 'visa',
  size = 40
}) {
  const h = Math.round(size * 0.625);
  if (brand === 'mc') {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: h,
      viewBox: "0 0 32 20",
      style: {
        display: 'block',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "10",
      r: "8",
      fill: "#EB001B"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21",
      cy: "10",
      r: "8",
      fill: "#F79E1B",
      fillOpacity: "0.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.8a8 8 0 010 12.4a8 8 0 010-12.4z",
      fill: "#FF5F00"
    }));
  }
  const b = BRANDS[brand] || {
    bg: '#27272a',
    label: '••'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: h,
      borderRadius: 4,
      background: b.bg,
      color: '#fff',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 ' + Math.max(9, Math.round(size * 0.22)) + 'px/1 var(--font-sans)',
      letterSpacing: brand === 'visa' ? '0.06em' : 0
    }
  }, b.label);
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/BrandMark/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: '#09090b',
    color: '#fff',
    hover: '#27272a'
  },
  secondary: {
    background: '#f4f4f5',
    color: '#09090b',
    hover: '#e4e4e7'
  },
  outline: {
    background: '#fff',
    color: '#09090b',
    borderColor: '#e4e4e7',
    hover: '#f4f4f5'
  },
  ghost: {
    background: 'transparent',
    color: '#09090b',
    hover: '#f4f4f5'
  },
  destructive: {
    background: '#ef4444',
    color: '#fff',
    hover: '#dc2626'
  },
  accent: {
    background: '#C54600',
    color: '#fff',
    hover: '#a83c00'
  }
};
const SIZES = {
  sm: {
    height: 36,
    padding: '0 12px',
    fontSize: 14
  },
  md: {
    height: 44,
    padding: '0 16px',
    fontSize: 15
  },
  lg: {
    height: 52,
    padding: '0 24px',
    fontSize: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      lineHeight: '20px',
      fontSize: s.fontSize,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      boxSizing: 'border-box',
      borderRadius: 8,
      border: '1px solid ' + (v.borderColor || 'transparent'),
      background: hover && !disabled ? v.hover : v.background,
      color: v.color,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      transition: 'background .15s cubic-bezier(.4,0,.2,1)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("i", {
    className: 'ti ti-' + icon,
    style: {
      fontSize: 18
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/CardRow/CardRow.jsx
try { (() => {
const NAMES = {
  visa: 'Visa',
  mc: 'Mastercard',
  amex: 'Amex',
  discover: 'Discover',
  apple: 'Apple Pay',
  paypal: 'PayPal'
};
function CardRow({
  card,
  selected = false,
  onSelect,
  onDetail
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onSelect && onSelect(card.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      background: '#fff',
      borderRadius: 12,
      border: '1px solid ' + (selected ? '#09090b' : '#e4e4e7'),
      cursor: 'pointer',
      transition: 'border-color .15s',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    brand: card.brand,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px/20px var(--font-sans)',
      color: '#09090b'
    }
  }, (NAMES[card.brand] || 'Card') + ' •• ' + card.last4), card.isDefault ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 10px/14px var(--font-sans)',
      color: '#fff',
      background: '#09090b',
      padding: '1px 8px',
      borderRadius: 9999,
      letterSpacing: '.02em'
    }
  }, "DEFAULT") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/18px var(--font-sans)',
      color: '#71717a'
    }
  }, card.exp ? 'Expires ' + card.exp : 'Linked account')), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onDetail && onDetail(card.id);
    },
    style: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      padding: 8,
      color: '#71717a',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-chevron-right",
    style: {
      fontSize: 20
    }
  })));
}
Object.assign(__ds_scope, { CardRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/CardRow/CardRow.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  help,
  maxLength,
  autoFocus,
  inputMode,
  disabled
}) {
  const [focused, setFocused] = React.useState(false);
  const border = error ? '#ef4444' : focused ? '#09090b' : '#e4e4e7';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/14px var(--font-sans)',
      color: '#09090b'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value == null ? '' : value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    maxLength: maxLength,
    autoFocus: autoFocus,
    inputMode: inputMode,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: '400 15px/20px var(--font-sans)',
      padding: '12px 14px',
      boxSizing: 'border-box',
      width: '100%',
      border: '1px solid ' + border,
      borderRadius: 8,
      background: '#fff',
      color: '#09090b',
      outline: 'none',
      boxShadow: focused ? '0 0 0 3px rgba(0,0,0,.06)' : 'none',
      transition: 'border-color .15s, box-shadow .15s',
      opacity: disabled ? 0.5 : 1
    }
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/18px var(--font-sans)',
      color: '#ef4444'
    }
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/18px var(--font-sans)',
      color: '#71717a'
    }
  }, help) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/Sheet/Sheet.jsx
try { (() => {
function Sheet({
  open,
  onClose,
  title,
  description,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.6)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'flex-end',
      animation: 'dsSheetFade .2s ease-out'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes dsSheetFade{from{opacity:0}to{opacity:1}}@keyframes dsSheetSlide{from{transform:translateY(100%)}to{transform:translateY(0)}}'), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: '#fff',
      borderRadius: '16px 16px 0 0',
      padding: '12px 20px 24px',
      boxShadow: '0 -4px 20px rgba(0,0,0,.1)',
      animation: 'dsSheetSlide .25s cubic-bezier(.4,0,.2,1)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: '#e4e4e7',
      margin: '0 auto 16px'
    }
  }), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px/24px var(--font-sans)',
      letterSpacing: '-.01em',
      color: '#09090b'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/20px var(--font-sans)',
      color: '#71717a',
      marginTop: 6
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, children)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Sheet/Sheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/payment-app.jsx
try { (() => {
const {
  AppBar,
  Button,
  Input,
  CardRow,
  Sheet,
  BrandMark
} = window.ShadcnMobileDesignSystem_1fa5e1;
// App.jsx — Payment Methods mobile app (single root component)
function PaymentApp() {
  const [route, setRoute] = React.useState({
    name: 'list'
  });
  const [cards, setCards] = React.useState([{
    id: '1',
    brand: 'visa',
    last4: '4242',
    exp: '08/27',
    name: 'Maya Okafor',
    isDefault: true
  }, {
    id: '2',
    brand: 'mc',
    last4: '8801',
    exp: '03/28',
    name: 'Maya Okafor',
    isDefault: false
  }, {
    id: '3',
    brand: 'amex',
    last4: '1005',
    exp: '11/26',
    name: 'Maya Okafor',
    isDefault: false
  }]);
  const [toast, setToast] = React.useState(null);
  const showToast = msg => {
    setToast(msg);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToast(null), 1800);
  };
  const setDefault = id => {
    setCards(cs => cs.map(c => ({
      ...c,
      isDefault: c.id === id
    })));
    showToast('Default card updated');
  };
  const removeCard = id => {
    setCards(cs => cs.filter(c => c.id !== id));
    setRoute({
      name: 'list'
    });
    showToast('Card removed');
  };
  const addCard = data => {
    const brand = data.number.startsWith('4') ? 'visa' : data.number.startsWith('5') ? 'mc' : data.number.startsWith('3') ? 'amex' : 'visa';
    const newCard = {
      id: String(Date.now()),
      brand,
      last4: data.number.slice(-4),
      exp: data.exp,
      name: data.name,
      isDefault: cards.length === 0
    };
    setCards(cs => [...cs, newCard]);
    setRoute({
      name: 'list'
    });
    showToast('Card added');
  };
  const screen = route.name === 'list' ? /*#__PURE__*/React.createElement(ListScreen, {
    cards: cards,
    onAdd: () => setRoute({
      name: 'add'
    }),
    onDetail: id => setRoute({
      name: 'detail',
      id
    })
  }) : route.name === 'add' ? /*#__PURE__*/React.createElement(AddScreen, {
    onBack: () => setRoute({
      name: 'list'
    }),
    onSubmit: addCard
  }) : /*#__PURE__*/React.createElement(DetailScreen, {
    card: cards.find(c => c.id === route.id),
    onBack: () => setRoute({
      name: 'list'
    }),
    onDefault: setDefault,
    onRemove: removeCard
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 780,
      background: '#fff',
      borderRadius: 40,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 80px rgba(0,0,0,0.18), 0 0 0 10px #111, 0 0 0 11px #333',
      fontFamily: 'Inter, -apple-system, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontSize: 15,
      fontWeight: 600,
      color: '#09090b',
      background: '#fff',
      position: 'relative',
      zIndex: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-signal-5g",
    style: {
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-wifi",
    style: {
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-battery-filled",
    style: {
      fontSize: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 736,
      overflow: 'hidden',
      position: 'relative'
    }
  }, screen), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 134,
      height: 5,
      borderRadius: 3,
      background: '#09090b'
    }
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: 16,
      right: 16,
      background: '#09090b',
      color: '#fff',
      borderRadius: 12,
      padding: '12px 16px',
      font: '500 14px/20px Inter',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 10px 30px rgba(0,0,0,.2)',
      zIndex: 100,
      animation: 'toastIn .25s ease-out'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-check",
    style: {
      fontSize: 18,
      color: '#4ade80'
    }
  }), toast), /*#__PURE__*/React.createElement("style", null, `@keyframes toastIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}`));
}

// ─── List screen ───────────────────────────────────────────────
function ListScreen({
  cards,
  onAdd,
  onDetail
}) {
  const def = cards.find(c => c.isDefault);
  const others = cards.filter(c => !c.isDefault);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflow: 'auto',
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Payment methods",
    right: /*#__PURE__*/React.createElement("button", {
      onClick: onAdd,
      style: {
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: 10,
        color: '#09090b'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-plus",
      style: {
        fontSize: 22
      }
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, def && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/16px Inter',
      color: '#71717a',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      padding: '0 4px'
    }
  }, "Default"), /*#__PURE__*/React.createElement(HeroCard, {
    card: def
  })), others.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/16px Inter',
      color: '#71717a',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      padding: '0 4px'
    }
  }, "Other methods"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, others.map(c => /*#__PURE__*/React.createElement(CardRow, {
    key: c.id,
    card: c,
    onDetail: onDetail
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    icon: "plus",
    onClick: onAdd
  }, "Add payment method"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '12px 14px',
      background: '#f4f4f5',
      borderRadius: 10,
      color: '#52525b',
      font: '400 13px/18px Inter'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-shield-check",
    style: {
      fontSize: 18,
      color: '#16a34a',
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, "Your card details are encrypted and never stored on your device."))));
}

// Hero card — illustrative credit card rendering for the default
function HeroCard({
  card
}) {
  const grad = {
    visa: 'linear-gradient(135deg, #1A1F71 0%, #2D3A8C 60%, #3E4BA5 100%)',
    mc: 'linear-gradient(135deg, #111 0%, #3a3a3a 100%)',
    amex: 'linear-gradient(135deg, #2E77BC 0%, #1c5a9a 100%)'
  }[card.brand] || 'linear-gradient(135deg, #09090b 0%, #3f3f46 100%)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1.586/1',
      borderRadius: 16,
      padding: 20,
      color: '#fff',
      background: grad,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 10px 24px rgba(0,0,0,.15)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 100% 0%, rgba(255,255,255,.18), transparent 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/16px Inter',
      color: 'rgba(255,255,255,.7)',
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, "Primary card"), /*#__PURE__*/React.createElement(BrandMark, {
    brand: card.brand,
    size: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 18px/22px "JetBrains Mono", monospace',
      letterSpacing: '.12em'
    }
  }, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ", card.last4), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      font: '500 12px/16px Inter',
      color: 'rgba(255,255,255,.75)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, "Cardholder"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#fff',
      marginTop: 2
    }
  }, card.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, "Expires"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#fff',
      marginTop: 2
    }
  }, card.exp)))));
}
window.ListScreen = ListScreen;
window.HeroCard = HeroCard;

// ─── Add screen ───────────────────────────────────────────────
function AddScreen({
  onBack,
  onSubmit
}) {
  const [number, setNumber] = React.useState('');
  const [exp, setExp] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [name, setName] = React.useState('');
  const formatNumber = v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  const formatExp = v => {
    const d = v.replace(/\D/g, '').slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d;
  };
  const valid = number.replace(/\s/g, '').length >= 15 && exp.length === 5 && cvc.length >= 3 && name.trim().length > 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Add card",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Card number",
    value: number,
    onChange: v => setNumber(formatNumber(v)),
    placeholder: "1234 5678 9012 3456",
    inputMode: "numeric",
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Expires",
    value: exp,
    onChange: v => setExp(formatExp(v)),
    placeholder: "MM/YY",
    inputMode: "numeric",
    maxLength: 5
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    value: cvc,
    onChange: v => setCvc(v.replace(/\D/g, '').slice(0, 4)),
    placeholder: "123",
    inputMode: "numeric",
    maxLength: 4
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Cardholder name",
    value: name,
    onChange: setName,
    placeholder: "Full name on card"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      padding: '10px 12px',
      background: '#f4f4f5',
      borderRadius: 8,
      color: '#52525b',
      font: '400 13px/18px Inter',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-lock",
    style: {
      fontSize: 16,
      flexShrink: 0,
      marginTop: 1,
      color: '#71717a'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Secure processing by your payment provider. We never see your full card number."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      borderTop: '1px solid #e4e4e7',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    disabled: !valid,
    onClick: () => onSubmit({
      number: number.replace(/\s/g, ''),
      exp,
      cvc,
      name
    })
  }, "Add card")));
}
window.AddScreen = AddScreen;

// ─── Detail screen ────────────────────────────────────────────
function DetailScreen({
  card,
  onBack,
  onDefault,
  onRemove
}) {
  const [confirm, setConfirm] = React.useState(false);
  if (!card) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fafafa',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    title: "Card details",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HeroCard, {
    card: card
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #e4e4e7',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Cardholder",
    value: card.name
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Expires",
    value: card.exp
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Network",
    value: {
      visa: 'Visa',
      mc: 'Mastercard',
      amex: 'American Express'
    }[card.brand] || 'Card'
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Status",
    value: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#16a34a',
        fontWeight: 600
      }
    }, "Active"),
    last: true
  })), !card.isDefault && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "star",
    onClick: () => onDefault(card.id)
  }, "Set as default"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    icon: "trash",
    onClick: () => setConfirm(true),
    style: {
      color: '#ef4444',
      borderColor: '#fecaca'
    }
  }, "Remove card")), /*#__PURE__*/React.createElement(Sheet, {
    open: confirm,
    onClose: () => setConfirm(false),
    title: "Remove this card?",
    description: `${{
      visa: 'Visa',
      mc: 'Mastercard',
      amex: 'Amex'
    }[card.brand]} ending in ${card.last4} will be removed from your account. This cannot be undone.`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "destructive",
    fullWidth: true,
    onClick: () => onRemove(card.id)
  }, "Remove card"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => setConfirm(false)
  }, "Cancel"))));
}
function Row({
  label,
  value,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid #f4f4f5'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/20px Inter',
      color: '#71717a'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/20px Inter',
      color: '#09090b'
    }
  }, value));
}
window.DetailScreen = DetailScreen;
window.PaymentApp = PaymentApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/payment-app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CardRow = __ds_scope.CardRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Sheet = __ds_scope.Sheet;

})();
