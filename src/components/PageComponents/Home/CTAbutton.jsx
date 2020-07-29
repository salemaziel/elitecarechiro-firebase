import React from 'react'
import Button from 'react-bootstrap/Button'
import ctabuttonStyles from './ctabutton.module.css'
import props from 'prop-types'

//const CTAButtons = ({ children }) => (
//const CTAButtons = (props) => (
function CTAButtons(props) {
return(
<div className={ctabuttonStyles.box}>
  {/*<div className={ctabuttonStyles.contain}>
    <img alt className={ctabuttonStyles.phonecall} height={48} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAEhUlEQVR4Xu2d7XXVMAyGpQmACWAD6ATQCWAD6ASUCWgnACagG0AnoBvQDWAD2gnEeS8O5KS9RJbt6CZWzuk/fyTvY0mWP26Z4nFVgF17j84pADgPggAQAJwVcO4+LCAAOCvg3H1YQABwVsC5+7CAAOCsgHP3YQFrBCAiz4joPRG9IKKHhd9wQ0RXRHTOzNeFba2uerYFJPG/N/rSo94gWAB8JaKXjQBcMvOrRm0fZLMWAL8quJ19Ytww86ODVKrRS1kASKN32TXLzNnv1PJ9Wred/bEiEgAqUgkAFcW0NBUALKpVrBMAKoppaSoAWFSrWCcAVBTT0lQAsKhWsU4AqCimpSkLACyePbB0pqkTidiMSiKClcvnGjEtZQJAALCMG3MdiwsKCzDLfbeiBcBZ2oyp+Br/mgoXNO+CsF7/pYn6sRo6L6uIPCGiH/MlbSXCAhS6iUirqegJM18oXmEzRbJjAL5cRFpsS3YnPrS0Ajglog8Vh2GX4pcAqBkHuhXfDCC5IZzheVpoBV2LXwqg1A11L34pgBI3FOIn12EKwoPbMS7Mhfgjv10K4A0Rfc6IAyH+RKwiACkY/ySixwoIIf49ItUAoLGC7s58KgbkrkgxgAwr6O7kswZCLQCaKek1Mx9pXqqnMrUA4JIGErO5WPCOmT/2JPDct1YBkNyQJhZgFRWuCIE7nloxIDMvuGLm41D/jwLVLCBZAe6Oaa4v4T4Ytja7f6oCSBDg498qlD1mZmzwd/20AICADB8/d3gLZRAPEBe6faoDSFaA66vfFKp2Hw+aAEgQtMdXLpj5RAFrk0WaAUgQtJs23eYHrQFgzwAQ5uIBeHW5WNcUQEaCNriX7mZGzQFkTk0xIwKEbn4zYhEACYL2LFFXEJYEgPwAiZfmJEU3EBYDkKxAm6ShOCAgMMNyNvssCmC0XgRL0MyMms6ORAT72VjFLXmKfu9ocQBGCKfM/KlEpWndSuJPm83e9XMBYIRQLWNuJD4+K3vv2w2AEQKmp5immhfwGoq/i1u5v3fkCsAIwTxDaiz+zh3lXjBxB2CEgGpnzHyujQtLiL9aACMIuB2jyRMG3TGbwlT1v3vMS4m/agCjPEGbrA0Q4JKwmnrv1aYlxV89gBEEJF+5t/HvWMPS4m8CwDCsRUS7oTMNA6iHnAFXqEqTLG2I+VtulUF431eKCO4kw7Vos+axWyr9Rd9s8TdlASNLwKYOXFJOcDaJV6PSpixgLIiIaI+71NDR3MZmAaQAjdMWcElzZ1DNApZW3DSA0SwJgVZz+KtUz+z6mwcwig0HaQ3dAJhMV3E/IXemlD26NRW6A3BobqlLAJMpK+LDa81obVGmawATEHBLyIQXdU0BYDSsRQTZ8ABiianrLTNnZeAHsR/QwhVM20z/+wYwsLzRyirWtSW5hPD39ZHWmDCNxV/NJY71bMp7ib8HyAADV6wGF4I1KI3buk0HzrBDl32kshsXdEjAx+8SAJzJBIAA4KyAc/dhAQHAWQHn7sMCAoCzAs7dhwUEAGcFnLsPCwgAzgo4d/8bkhaJcMKI4pcAAAAASUVORK5CYII=" width={48} />
    {children}
</div>*/}
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
              className={props.className}
            >
              {props.buttonText}
            </Button>


</div>

)
}

export default CTAButtons