<template>
  <div class="welcome">
    <div class="loading"
         @click="toHome()">yangyjxm</div>
    <!-- <div class='loading'>happy&nbsp;birthday&nbsp;to&nbsp;pikaqiu</div> -->
  </div>
</template>

<script>
export default {
  name: 'loading',
  mounted () {
    this.loading()
  },
  methods: {
    loading () {
      let loading = document.querySelector('.loading')
      let letters = loading.textContent.split('')
      loading.textContent = ''
      letters.forEach((letter, i) => {
        let span = document.createElement('span')
        span.textContent = letter
        span.style.animationDelay = `${i / 10}s`
        span.style.margin = `0 0.5vw`
        loading.append(span)
      })
    },
    toHome () {
      this.$router.push('home')
    }
  }
}
</script>
<style lang='scss'>
// 文字跳跃效果css in js
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");

@function float-text-3d($shadow-color: #bbb, $depth: 10, $floating: false) {
  $shadows: ();

  // When dropped, it will shrink like a spring. When floating, it grows into its shape.
  @for $i from 1 to $depth {
    @if ($floating == false and $i > $depth / 2) {
      $shadow-color: transparent;
    }
    $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma);
  }

  // When dropped, the shadow reveals. When floating, the shadow fades.
  @if ($floating == false) {
    $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma);
  } @else {
    $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma);
  }

  @return $shadows;
}

.welcome {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  background: #2980b9;
  height: 100%;
  width: 100%;
  .loading {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    margin: 0 auto;
    color: white;
    font-size: 5em;
    font-family: "Baloo Bhaijaan", cursive;
    cursor: pointer;
    // text-transform: uppercase;
    span {
      text-shadow: float-text-3d($floating: false);
      transform: translateY(20px);
      animation: bounce 0.4s ease infinite alternate;
    }
  }
}

@keyframes bounce {
  to {
    text-shadow: float-text-3d($floating: true);
    transform: translateY(-20px);
  }
}
</style>
