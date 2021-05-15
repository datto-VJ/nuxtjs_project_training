<template>
    <div class="container">
         <!--<b-row>
            <b-col>
                <h1>CHOOSE TEMPLATE</h1>
            </b-col>
            <b-col>
                <h2>ENTER INFOMATION</h2>
            </b-col>
         </b-row>-->
            <b-card-group deck style="max-height:200px">
                <!---CARD TYPE 1--->
                <b-card
                    header="featured"
                    header-tag="header"
                    footer="Card Footer"
                    footer-tag="footer"
                    title="Title"
                    >
                    <b-card-text>Header and footers using props.</b-card-text>
                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                <!---CARD TYPE 2--->
                <b-card
                    title="Card Title"
                    img-src="../assets/images/img_mypost_01.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 540px;"
                    class="mb-2"
                >
                    <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                <!---CARD TYPE 3--->
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img src="../assets/images/img_mypost_01.jpg" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                        <b-card-text>
                            This is a wider card with supporting text as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-card-group>
    </div>
</template>