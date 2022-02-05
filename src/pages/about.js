import * as React from "react"
import {NotificationsProvider} from 'reapop'
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <NotificationsProvider>
            <Layout title={'About | Blog'}>
                <div className={'about'}>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis leo at felis bibendum lacinia. Aliquam venenatis magna est, sed placerat metus euismod sed. Nullam iaculis imperdiet magna. Mauris sed lacus nec quam dignissim efficitur quis a enim. Aenean nec leo quis nibh rhoncus aliquam non ac erat. Morbi at massa et sapien efficitur sagittis. Donec et risus id urna tincidunt dignissim. Aenean mollis velit non ornare bibendum. Duis consectetur dapibus luctus. Ut feugiat, turpis id euismod euismod, ipsum erat vehicula augue, sed vulputate ligula ligula at diam. Pellentesque aliquam, diam a interdum porttitor, libero mi tristique velit, in rhoncus libero sapien sed purus. Praesent in lectus sit amet neque rhoncus luctus. Vivamus lacinia lectus accumsan turpis commodo, id pellentesque ipsum fringilla.</p>

                    <p>Nullam id risus sollicitudin, pretium enim vel, aliquam neque. Etiam sed ligula dolor. Aenean sed efficitur nulla, sit amet venenatis odio. Quisque et porttitor orci, ut feugiat nunc. Fusce rhoncus eget sapien vel finibus. In porttitor felis est, a pretium elit cursus laoreet. Nulla mattis massa tellus, a porttitor nisi semper nec. Sed ornare porta eleifend.</p>

                    <p>Ut suscipit leo eu accumsan tincidunt. Duis at sodales elit, eget accumsan diam. Ut finibus suscipit urna, nec rhoncus libero semper ac. Aliquam in urna at libero tempus viverra sed eu lectus. Sed rutrum mauris vitae ligula tempus bibendum. Morbi quis diam semper, suscipit turpis ut, placerat dolor. Nulla nunc dui, interdum non dictum eget, eleifend ut massa. Maecenas in turpis eu mi varius placerat at at leo. Suspendisse potenti.</p>

                    <p>Vestibulum nec lacus eget dolor vestibulum ullamcorper. Cras pulvinar dui vel tincidunt auctor. Duis lobortis est sit amet condimentum sollicitudin. Integer tempor felis non erat venenatis dictum. Nullam gravida erat nunc, eu ultrices mauris mattis vel. Etiam eros nunc, convallis vel augue sed, rutrum venenatis magna. Curabitur elementum lacus quis massa consectetur, eget condimentum lectus laoreet. Duis rutrum mauris eget magna lobortis, sit amet finibus magna congue. Nullam quis mollis velit. Mauris vehicula orci eu metus posuere tristique. Ut scelerisque, metus non molestie interdum, ligula lacus vehicula nisl, sit amet porttitor diam lorem eu tortor. Mauris ultricies, lorem in tempus facilisis, est diam placerat mi, id molestie dolor lacus in enim. Quisque consectetur eget libero et elementum. Pellentesque feugiat eget dolor suscipit tempus. In blandit metus non arcu dapibus luctus. Aenean ac pharetra mauris.</p>

                    <p>Duis accumsan, est et iaculis porta, lectus erat congue sapien, sit amet lobortis sem tellus ut mauris. Curabitur eu dui vel justo laoreet lacinia sit amet nec nibh. Integer vel hendrerit leo, dignissim efficitur sapien. Mauris ultrices posuere turpis, at finibus felis. Ut tempus ipsum et nisi congue fermentum. Maecenas vitae ipsum et diam dignissim faucibus. Donec vitae erat lacinia, vulputate mi vitae, tempor ligula. Proin pretium est laoreet risus maximus, quis sollicitudin augue vestibulum. Duis hendrerit ligula at nisl ullamcorper, non tincidunt elit auctor. Nunc viverra a eros id gravida. Ut ullamcorper placerat leo, ut porttitor ex congue id. In commodo elit vel ante gravida euismod.</p>
                </div>
            </Layout>
        </NotificationsProvider>
    )
}

export default AboutPage
