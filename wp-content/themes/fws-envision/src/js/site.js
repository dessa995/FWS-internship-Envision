/**
 * Import from node_modules
 */
import 'bootstrap/js/src/scrollspy';

/**
 * Import site scripts
 */
import SkipLinkFocusFix from './site/skip-link-focus-fix';
import Menu from './site/menu';
import Sliders from './site/sliders';
import ScrollTo from './site/scrollTo';
import Styleguide from './site/styleguide';
import Fancybox from './site/fancybox';
import Select2 from './site/select2';
import FormHelpers from './site/formHelpers';
import PerfectScroll from './site/perfectScroll';
import LazyLoading from './site/lazyLoad';
import LoadMoreBlog from './site/loadMoreBlog';
import ResponsiveHeaderPosition from './site/responsive-header-position';
import ClientSlider from './site/client-slider';
import TabChanger from './site/tab-changer';
import CountUp from './site/count-up';
import BoxContent from './site/box-section-content-api';
import BoxPopup from './site/boxPopup';
import AOS from 'aos';

/**
 * Init site scripts
 */
jQuery(function() {
	SkipLinkFocusFix.init();
	Styleguide.init();
	Menu.init();
	Sliders.init();
	ScrollTo.init();
	Fancybox.init();
	Select2.init();
	FormHelpers.init();
	PerfectScroll.init();
	LazyLoading.init();
	LoadMoreBlog.init();
	ResponsiveHeaderPosition.init();
	ClientSlider.init();
	TabChanger.init();
	CountUp.init();
	BoxContent.init();
	BoxPopup.init();
	AOS.init();
});
