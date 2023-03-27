<button role="tab" aria-controls="accordion" aria-selected={isOpen} onClick={onClickTab}>
  클릭하면 아코디언이 열립니다
</button>
<div role="tablist">
  <div id="accordion" aria-expanded={isOpen} aria-hidden={!isOpen}>
    ...
  </div>
</div>