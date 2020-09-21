import * as React from "react";

const IconOctagon = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-octagon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.7 3h6.6c0.3 0 .5 .1 .7 .3l4.7 4.7c0.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-0.2 .2 -.4 .3 -.7 .3h-6.6c-0.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-0.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c0.2 -.2 .4 -.3 .7 -.3z" /></svg>;

export default IconOctagon;