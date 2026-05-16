import React, { useState, useId } from 'react';
import "../index.css";

const HINT_CONFIGS = {
  'right':{w:160, h:70, textX:100, textY:14, anchor:'start',path: 'M 130 24 C 110 24 80 52 60 60',style:{top:'5rem',right:'5rem'}},
  'left':{w:160, h:70, textX:100, textY:14, anchor:'end',path: 'M 30 24 C 50 24 80 52 100 60',style:{top:'15rem',left:'-7rem'}},
  'bottom-right':{w:160, h:70, textX:50, textY:70, anchor:'start',path: 'M 120 48 C 90 40 60 24 44 12',style:{top:'33.5rem',left:'4rem'}},
};

const HintBox = ({ text, side = 'right', children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const uid = useId().replace(/:/g, "");
  const c = HINT_CONFIGS[side] || HINT_CONFIGS['right'];

  return (
      <div className="hint-overlay" style={{...c.style}}>
        <svg width={c.w} height={c.h} viewBox={`0 0 ${c.w} ${c.h}`} overflow="visible" aria-hidden="true" >
          <defs>
            <marker id={uid} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse" >
              <path d="M2 1L8 5L2 9" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>
          <path d={c.path} fill="none" strokeWidth="1.3" strokeDasharray="5 3" 
            strokeLinecap="round" markerEnd={`url(#${uid})`}/>
          <text x={c.textX} y={c.textY} textAnchor={c.anchor}>
            {text}
          </text>
        </svg>
      </div>
  );
};

export default HintBox;
