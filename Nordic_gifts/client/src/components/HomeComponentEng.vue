<template>
  <div id="app">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    
    <img class="logo" :src="logo">
    <h1 class="main_text">Choose the right items to create your desirable souvenir</h1>
    <img class="head" :src="head" @click="loadHead();">
    <img class="body" :src="body" @click="loadBody();">
    <img class="feet" :src="feet" @click="loadFeet();">

    <!--Scroll-->
    <VueNextLevelScroll target=".arrow">
    <div class="wrapper">
      <div class="arrow">
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
    </VueNextLevelScroll>

    <!--Language selector-->
     <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img border="0" alt="English" src="../assets/Great_Britain.png" width="30" height="20">
      </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="http://localhost:8081"><img border="0" alt="Estonian" src="../assets/Estonia.png" width="30" height="20"></a>
        </div>
    </div>


    <!--Form-->
    <form @submit.prevent="addPost">
      <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group input-field">
            <label>Name</label>
            <input required="required" type="text" class="validate form-control" v-model="post.name">
          </div>
        </div>
        </div>
        <div class="justify-content-center row">
          <div class="col-sm-12 col-lg-6">
            <div class="form-group input-field">
              <label>E-mail</label>
              <input required="required" type="email" class="validate form-control" v-model="post.email">
            </div>
          </div>
        </div>
        <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group input-field">
            <label>Phone number</label>
            <input required="required" type="tel" pattern="[0-9]{8}" class="validate form-control" v-model="post.number">
          </div>
        </div>
        </div>
        <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group">
            <label></label>
            <textarea class="form-control" v-model="post.body" rows="5" placeholder="Want to add something to your souvenir? Let us know here"></textarea>
          </div>
        </div>
        </div>
        <div class="form-group">
        <button class="send-button"><span>SEND ORDER</span></button>
        </div>
    </form>

<!--Footer-->
<footer>
  <div id="footer-content">
    <h5>info@nordicgifts.ee</h5>
    <h5>+372 5184 123</h5>
  </div>
</footer>


  </div>
</template>
<script>
import VueNextLevelScroll from "vue-next-level-scroll/";


export default {
  name: "app",
      components: {
      VueNextLevelScroll
      },
    data () {
        return {
            logo: require('@/assets/logo.png'),
            head: null,
            index2: 0,
            imagesHead: [
      require('@/assets/head.png'),
      'https://jp.vuejs.org/images/logo.png',
      'https://jsfiddle.net/img/logo@2x.png',
      'https://www.epicentrofestival.com/wp-content/uploads/2019/11/Cute-Animals-Woodland-Clipart-Set-Clip-Art-Department-Cute-Clipart-Animals-Fox-720x1045.jpg'
      ],
            body: null,
            index1: 0,
            imagesBody: [
      require('@/assets/body.png'),
      'https://jp.vuejs.org/images/logo.png',
      'https://jsfiddle.net/img/logo@2x.png',
      'https://www.epicentrofestival.com/wp-content/uploads/2019/11/Cute-Animals-Woodland-Clipart-Set-Clip-Art-Department-Cute-Clipart-Animals-Fox-720x1045.jpg'
      ],
            feet: null,
            index: 0,
            imagesFeet: [
      require('@/assets/feet.png'),
      'https://jp.vuejs.org/images/logo.png',
      'https://jsfiddle.net/img/logo@2x.png',
      'https://www.epicentrofestival.com/wp-content/uploads/2019/11/Cute-Animals-Woodland-Clipart-Set-Clip-Art-Department-Cute-Clipart-Animals-Fox-720x1045.jpg'
      ],
            post:{},
        }
      },
        created() {
        this.loadFeet(),
        this.loadBody(),
        this.loadHead()
        },
        methods: {
        async addPost(){
        let uri = '/posts/add';
        this.$http.post(uri, this.post).then(() => {
        this.post.name = ''; 
        this.post.email = ''; 
        this.post.number = '';
        this.post.body = '';
        this.$alert(
          "Tellimus on edastatud",
          "Täname",
          "success"
          );
          });
      },
            loadFeet() {
        this.feet = this.imagesFeet[this.index];
        this.index = (this.index + 1) % this.imagesFeet.length;
    },
      loadBody() {
        this.body = this.imagesBody[this.index1];
        this.index1 = (this.index1 + 1) % this.imagesBody.length;
    },
      loadHead() {
        this.head = this.imagesHead[this.index2];
        this.index2 = (this.index2 + 1) % this.imagesHead.length;
    },
}
}


</script>

<style>
body {
    padding: 0px;
    margin: 0px;
    background-image: url("~@/assets/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-size: auto;
}

/*Logo*/
.logo {
  width: 350px !important;
  display: block;
    margin-left: auto;
    margin-right: auto;
}

/*Souvenir head, body and feet*/
.body {
    width: 180px !important;
    margin: auto !important;
    display: block;
    cursor: pointer;
}

.head {
    width: 270px !important;
    margin: 0px auto -18px auto;
    display: block;
    cursor: pointer;
}

.feet {
    width: 180px !important;
    margin: -10px auto 0px auto;
    display: block;
    cursor: pointer;
}

/*Main text and tooltip*/
.main_text  {
    font-family: 'Charm', cursive;
    color: #707070;
    font-size: 34px;
    text-align: center;
    background-color: transparent !important;
    border: none;
    cursor: default !important;
    display: block;
    margin: 30px auto 30px auto;
}


/*Textarea style*/
textarea {
border: solid 1.5px #707070;
font-family: 'Catamaran', sans-serif;
display: inline-block;
overflow: auto;
outline: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding: 10px;
height: 190px;
margin-top: 50px;
margin-bottom: 80px;
resize: none; /*remove the resize handle on the bottom right*/
}

/*Text*/
#text{
  font-size: 20px;
}

/*Textarea*/
textarea::-webkit-input-placeholder {
font-family: 'Catamaran', sans-serif;
font-size: 20px;
}

textarea:-moz-placeholder { /* Firefox 18- */
font-family: 'Catamaran', sans-serif; 
font-size: 20px;
}

textarea::-moz-placeholder {  /* Firefox 19+ */
font-family: 'Catamaran', sans-serif;  
font-size: 20px;
}

textarea:-ms-input-placeholder {
font-family: 'Catamaran', sans-serif;  
font-size: 20px;
}

/*Form*/
.row {
  margin: 20px 0px 5px 0px;
}
.form-input {
  margin-top: calc(100vh - 500px);
}
/*Send button*/
.send-button {
  margin:20px auto 0px auto;
  display:block;
  background-color: #FF9F7F !important;
  color: #fff;
  border-radius: 10px;
  border: 0px;
  padding: 15px 30px;
  font-size: 18px;
  transition: all 0.5s;
}

.send-button span {
  position: relative;
  transition: 0.5s;
  display: inline-block;
}

.send-button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.send-button:hover span {
  padding-right: 25px;
}

.send-button:hover span:after {
  opacity: 1;
  right: 0;
}

/*Incorrect input then red*/
input.invalid[type=email]:not(.browser-default), input.invalid[type=text]:not(.browser-default), input.invalid[type=tel]:not(.browser-default) {
  border-bottom: 0.1px solid red !important;
  box-shadow: 0 0.1px 0 0 red !important;
}

/*Input style*/
input {
  box-shadow: 0 0.1px 0 0 #333 !important;
  border-bottom: 0.1px solid #333 !important;
  font-family: 'Catamaran', sans-serif !important;
}

/*Label*/
label {
  color: #333;
  font-size: 16px;
}

/*Footer content eg email and phone*/
#footer-content h5 {
  margin: 10px;
}


/* unvisited link */
.send-button:link {
  background-color: #FF9F7F !important;
}

/* visited link */
.send-button:visited{
  background-color: #FF9F7F !important;
}

/* mouse over link */
.send-button:hover{
  background-color: #F59170 !important;
}

/* selected link */
.send-button:active {
  background-color: #F59170 !important;
}

/*Here starts the arrow pointing down animation style*/
.wrapper {
  width: 0%;
  height: 20%;
}

.arrow {
  width: 38px;
  height: 14px;
  margin: auto;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  opacity: 0.5;
  transition: ease 1s;
  animation: bouncey 1.6s linear infinite;
  padding: 20px;
}

.arrow ul {
  list-style: none;
}

.arrow ul li {
  width: 24px;
  height: 4px;
  background: #333;
}

.arrow ul li:nth-child(1) {
  left: 0;
  top: 0;
  position: absolute;
  transform: rotate(45deg);
  border-radius: 5px 0 0 5px;
}

.arrow ul li:nth-child(2) {
  left: 14px;
  position: absolute;
  border-radius: 0 5px 5px 0;
  top: 0;
  transform: rotate(-45deg);
}

.arrow:hover {
  opacity: 1;
}

@keyframes bouncey {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0);
  }
}

form {
  margin-top: calc(100vh - 500px);
}

/*Footer*/
footer {
  background: #443838;
  height: 120px;
  position:relative;
  padding-top: 5px;
  margin-top: 210px;
}
footer:before {
 content:"";
 position:absolute;
 top: -59px;
 height:60px;
 left:0;
 right:0;
 background:linear-gradient(to bottom left, transparent 49%, #443838 50%);
}
h5 {
color: white;
text-align: center;
font-family: 'Catamaran', sans-serif;
}

/*Input style*/
input {
  box-shadow: 0 0.1px 0 0 #333;
  border-bottom: 0.1px solid #333;
  font-family: 'Catamaran', sans-serif;
}

/*Label*/
label {
  color: #333;
  font-size: 16px;
}


.container {
  padding: 0px;
  max-width: 100%;
  width: 100%;
}

/*Alert box OK button*/
.swal2-styled.swal2-confirm {
  background-color: #FF9F7F;
}

/*Language selector*/
.dropdown {
  right: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  transition: all 0.5s;
}

.btn, .btn:visited {
  background-color: #333;
  opacity: 0.6;
  border:none;
  box-shadow: 0;
  border-radius: 0px;
  transition: all 0.5s;
}
.dropdown-item:hover, .dropdown-item, .dropdown-item:visited {
  background-color: #333;
}

.btn:hover {
  background-color: #333;
  opacity: 0.8;
  transition: all 0.5s;
}

.dropdown-menu.show{
  background-color: #333;
  opacity: 0.8;
  transform: translate3d(-1px, -46px, 0px) !important;
  transition: all 0.5s;
  border-radius: 0px;
}

.btn:focus {
    background-color: #333;
  opacity: 0.8;
  box-shadow: 0 !important;
}

.show>.btn-secondary.dropdown-toggle:focus, .btn-secondary:focus, .btn:focus {
  box-shadow: none;
}
.est_language {
  margin-right: 20px !important;
}

/*Tooltip*/
.tooltip-big-text {
  --balloon-font-size: 15px;
  --balloon-color: #707070;
}

h1 {
  display: none;
}



/*Mobile view*/
/*Textarea*/
@media only screen and (max-width: 900px) {
  textarea {
    width: 95%;
  }
  .arrow {
    bottom: 0px !important;
  }
  .main_text {
    font-size: 20px;
  }

  input {
    border: none;
  }

  .head {
    width: 200px !important;
    margin: 0px auto -10px auto;
  }

  .body, .feet {
    width: 150px !important;
    margin: -7px auto 0px auto;
  }
  .app {
    width: 100vw !important;
  }
  /*Language selector*/
.dropdown {
  right: 0 ;
  position: fixed;
  z-index: 1;
  bottom: 0;
  transition: all 0.5s;
}
.tooltip-big-text {
  display: none;
}
h1 {
  display: block;
  margin: auto;
  font-size: 35px;
  text-align: center;
  font-family: 'Charm', cursive;
  color: #707070;
  margin: 30px auto 40px auto;
  margin-left: 0px !important;
}
.logo {
  width: 300px !important;
  display: block;
    margin-left: auto;
    margin-right: auto;
}

}
</style>

