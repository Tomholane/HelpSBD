var modal = document.getElementById('modal')

function close_modal() {
    modal.classList.add('close_modal')
    if (modal.classList.contains('showup_modal')) {
        modal.classList.remove('showup_modal')

    }

}

function showup_modal() {
    modal.classList.add('showup_modal')
    if (modal.classList.contains('close_modal')) {
        modal.classList.remove('close_modal')

    }
}

function likes(obj) {
    ids = obj - 1;
    var like = document.querySelectorAll('.home-product-item__heart')[ids]
    like.classList.toggle('home-product-item__heart--liked')
}