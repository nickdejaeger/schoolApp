<template>

  <div class="badge">
    <figure class="badge__picture"></figure>
    <div class="badge__bio">
      <header class="badge__head">
          <div class="badge__title"><slot name="name"></slot></div>
          <div class="badge__label"><slot name="job"></slot></div>
      </header>
      <div class="badge__socials">
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>  <polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>  <rect x="2" y="9" width="4" height="12"></rect>  <circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
  padding: 1.5rem 2rem;
  background-color: #FFF;
  border: 1px solid rgba(212, 212, 216, 0.8);
  box-shadow: var(--component-shadow);
  border-radius: 0.5rem;

  &__picture {
    position: relative;
    border-radius: 999999px;
    overflow: hidden;
    width: 88px;
    height: 88px;
    min-width: 88px;
    max-width: 88px;
    min-height: 88px;
    max-height: 88px;
    background-color: #EEE;

    &::before {
      content: 'JB';
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      font-size: 26px;
      font-weight: 700;
      color: #AAA;
    }

    img {
      position: relative;
      width: 100%;
      min-width: auto;
      max-width: 88px;
      height: auto;
      min-height: auto;
      max-height: none;
    }
  }

  &__bio {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  &__head {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }

  &__label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: .75;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: .5rem;

    a {
      color: #945E00;

      svg {
        width: 1rem;
        height: 1rem;
      }

      &:hover {
        transform: translateY(2px);
      }
    }
  }

  &--shadowed {
    border: 1px solid #f6f6f6;
    box-shadow: 0 10px 20px -10px #CCC;
  }
}

@media (max-width: 320px) {
  .badge {
    flex-direction: column;

    &__bio {
      flex-direction: column-reverse;
    }

    &__bio,
    &__head {
      align-items: center;
      text-align: center;
    }
  }
}
</style>