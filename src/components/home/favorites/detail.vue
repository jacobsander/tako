<template>
    <div class="detail">
        <div class="detail__header">
            <div 
                class="detail__back"
                @click="backButtonWasClicked">
                <i class="material-icons">arrow_back</i>
            </div>
            <div class="detail__title">Santa Monica Pier</div>
        </div>
        <div class="detail__content">
            <div class="detail__image">
                <img src="https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
            </div>
            <div class="detail__description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis ipsum eu ante vehicula rutrum. Nulla scelerisque, tellus vel congue blandit, neque augue accumsan dolor, eu ultrices libero lacus imperdiet ex. Integer finibus ultricies sodales. Ut vitae semper leo. Nunc varius, nibh vitae feugiat maximus, elit urna ultricies metus, vel sodales mauris ligula accumsan enim. Pellentesque a porta sem. In hendrerit, sem eu hendrerit tincidunt, neque arcu tristique massa, at aliquet neque eros sed eros. Quisque iaculis libero ipsum, ac viverra dolor tincidunt id. In sapien velit, varius a eros et, eleifend laoreet mauris. Integer viverra ex velit, a luctus lorem lobortis ut. Nam in laoreet lorem. Aliquam nec hendrerit erat. Integer tincidunt venenatis risus quis blandit. Donec eget elit eget lorem pharetra fermentum at eu leo. Etiam sagittis placerat mauris vel hendrerit.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        backButtonWasClicked() {
            const routeQuery = this.$route.query || {}; 
            const returnTo = routeQuery.returnTo || 'list';
            this.$router.push(`/favorites/${returnTo}`);
        }
    }
}
</script>

<style>
    .detail {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    .detail__header {
        display: flex;
        background: #2c3e50;
        color: #fff;
        width: 100%;
        min-height: 80px;
        flex: 80px 0;
        align-items: center;
        padding: 0 16px;
    }

    .detail__title {
        margin-left: 16px;
    }

    .detail__content { 
        display: flex;
        width: 100%;
        flex: 1 0;
        flex-direction: column;
    }

    .detail__back {
        cursor: pointer;
    }

    .detail__back:hover {
        opacity: 0.7
    }

    .detail__image {
        flex: 1 0;
        overflow: hidden;
    }

    .detail__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .detail__description {
        flex: 1 0;
        padding: 16px 32px;
        line-height: 1.6em;
        overflow: scroll;
    }


</style>


