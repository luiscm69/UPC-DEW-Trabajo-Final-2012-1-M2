  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-Timepicker-Addon/jquery-ui-timepicker-addon.js at master · trentrichardson/jQuery-Timepicker-Addon</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="RjUaqNmoewOisqFgS7u+vViO8ILjET8/VEYNMvh4cnM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-fc8f93aa673bcc847295986dc6d690ee822e90d0.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-327db63293098d6476136b438e34be409ae3b461.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-917510fd4e1e5f0487cfe32445a6cfc8927e84f1.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-d5d6341dd56a258b1ed19b094ef897b3d2c3af1f.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/trentrichardson/jQuery-Timepicker-Addon/blob/7b9ba9a5111fcb716c5eacafe922b6be484eae49/jquery-ui-timepicker-addon.js'>
    <meta property="og:title" content="jQuery-Timepicker-Addon"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/trentrichardson/jQuery-Timepicker-Addon"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1340659530"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Adds a timepicker to jQueryUI Datepicker. Contribute to jQuery-Timepicker-Addon development by creating an account on GitHub."/>

    <meta name="description" content="Adds a timepicker to jQueryUI Datepicker. Contribute to jQuery-Timepicker-Addon development by creating an account on GitHub." />

  <link href="https://github.com/trentrichardson/jQuery-Timepicker-Addon/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-Timepicker-Addon:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production ">
    <div id="wrapper">

    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659530" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659530" />
          </a>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
                <span class="mail-status all-read"></span>
              </a>

              
    <div class="topsearch ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/aaroncvaldez"><img height="20" src="https://secure.gravatar.com/avatar/f0c3002ff7df64c4e76eb7232edc4302?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/aaroncvaldez" class="name">aaroncvaldez</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings (You have no verified emails)">
          <span class="mini-icon mini-icon-account-settings"></span>
            <span class="setting_warning">!</span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      <div class="global-notice warn"><div class="global-notice-inner"><h2>You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email</h2><p>Email verification will help our support team help you in case you have any email issues or lose your password.</p></div></div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="RjUaqNmoewOisqFgS7u+vViO8ILjET8/VEYNMvh4cnM=" /></div>
  <input id="repository_id" name="repository_id" type="hidden" value="753297" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span> Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/trentrichardson/jQuery-Timepicker-Addon/toggle_star" class="minibutton js-toggler-target" data-remote="true" data-method="post" rel="nofollow">
              <span class="starred">
                <span class="mini-icon mini-icon-star"></span>
                  Unstar
              </span>
              <span class="unstarred">
                <span class="mini-icon mini-icon-star"></span>
                  Star
              </span>
            </a>

            <a class="social-count js-social-count" href="/trentrichardson/jQuery-Timepicker-Addon/stargazers">1,083</a>
          </li>

              <li><a href="/trentrichardson/jQuery-Timepicker-Addon/fork" class="minibutton btn-fork js-toggler-target fork-button lighter" rel="nofollow" data-method="post">Fork</a><a href="/trentrichardson/jQuery-Timepicker-Addon/network" class="social-count">227</a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/trentrichardson" class="url fn" itemprop="url" rel="author">              <span itemprop="title">trentrichardson</span>
              </a></span> /
            <strong><a href="/trentrichardson/jQuery-Timepicker-Addon" class="js-current-repository">jQuery-Timepicker-Addon</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/network" highlight="repo_network">Network</a>
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/trentrichardson/jQuery-Timepicker-Addon/issues" highlight="repo_issues">Issues <span class='counter'>135</span></a></li>

      <li><a href="/trentrichardson/jQuery-Timepicker-Addon/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/trentrichardson/jQuery-Timepicker-Addon/tree-list/7b9ba9a5111fcb716c5eacafe922b6be484eae49"
      data-blob-url-prefix="/trentrichardson/jQuery-Timepicker-Addon/blob/7b9ba9a5111fcb716c5eacafe922b6be484eae49"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/trentrichardson/jQuery-Timepicker-Addon">jQuery-Timepicker-Addon</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/trentrichardson/jQuery-Timepicker-Addon/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/tags" class="" highlight="repo_tags">Tags <span class="counter">13</span></a></li>
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/dev/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="dev" rel="nofollow">dev</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/master/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v1.0.1/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v1.0.1" rel="nofollow">v1.0.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v1.0.0/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v1.0.0" rel="nofollow">v1.0.0</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.9/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.9" rel="nofollow">v0.9.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.8/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.8" rel="nofollow">v0.9.8</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.7/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.7" rel="nofollow">v0.9.7</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.6/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.6" rel="nofollow">v0.9.6</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.5/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.5" rel="nofollow">v0.9.5</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.4/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.4" rel="nofollow">v0.9.4</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.3/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.3" rel="nofollow">v0.9.3</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.2/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.2" rel="nofollow">v0.9.2</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9.1/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9.1" rel="nofollow">v0.9.1</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.9/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.9" rel="nofollow">v0.9</a>
                  </h4>
                </div>
                <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/trentrichardson/jQuery-Timepicker-Addon/blob/v0.8/jquery-ui-timepicker-addon.js" class="js-navigation-open" data-name="v0.8" rel="nofollow">v0.8</a>
                  </h4>
                </div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/trentrichardson/jQuery-Timepicker-Addon" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/trentrichardson/jQuery-Timepicker-Addon/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">2</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          




<!-- blob contrib key: blob_contributors:v21:ea09be7ce0641c2f77adef0b96d9027e -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ea09be7ce0641c2f77adef0b96d9027e -->

<!-- block_view_fragment_key: views10/v8/blob:v21:8be460438c73574f996fd318776de49a -->
  <div id="slider">

    <div class="breadcrumb" data-path="jquery-ui-timepicker-addon.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/trentrichardson/jQuery-Timepicker-Addon/tree/7b9ba9a5111fcb716c5eacafe922b6be484eae49" class="js-rewrite-sha" itemprop="url"><span itemprop="title">jQuery-Timepicker-Addon</span></a></b> / <strong class="final-path">jquery-ui-timepicker-addon.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="jquery-ui-timepicker-addon.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="jquery-ui-timepicker-addon.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ab4c8036b1eb49d51feac4ab23975c91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
    <span class="author"><a href="/trentrichardson">trentrichardson</a></span>
    <time class="js-relative-date" datetime="2012-07-01T15:51:06-07:00" title="2012-07-01 15:51:06">July 01, 2012</time>
    <div class="commit-title">
        <a href="/trentrichardson/jQuery-Timepicker-Addon/commit/7b9ba9a5111fcb716c5eacafe922b6be484eae49" class="message">Merge dev branch v1.0.1</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>17</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="rossj" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=rossj"><img height="20" src="https://secure.gravatar.com/avatar/f57e263726287d2cd38aed4bce9648a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kumm" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=kumm"><img height="20" src="https://secure.gravatar.com/avatar/1409c2ada52ccf319d943846bd064c3c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ajgon" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=ajgon"><img height="20" src="https://secure.gravatar.com/avatar/b5b17d3259b2265b49a5a99a82fa4151?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="sarxos" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=sarxos"><img height="20" src="https://secure.gravatar.com/avatar/46e3c01067064c75ba7bd94ce3ca0fb5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="doublerebel" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=doublerebel"><img height="20" src="https://secure.gravatar.com/avatar/896ec8e60011c692b3884bd1a246831a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="TigerDX" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=TigerDX"><img height="20" src="https://secure.gravatar.com/avatar/4e8e630f3bb720cf84000155d56b3f81?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="vorapoap" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=vorapoap"><img height="20" src="https://secure.gravatar.com/avatar/712e78eeecccd676668b55f492c072d4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="alexandergitter" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=alexandergitter"><img height="20" src="https://secure.gravatar.com/avatar/2eeb23251f036ae9ab666f94711d8074?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="apepper" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=apepper"><img height="20" src="https://secure.gravatar.com/avatar/5c327a2952c9f00c6ab96524529ae85e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="DuctTapeMan" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=DuctTapeMan"><img height="20" src="https://secure.gravatar.com/avatar/618a5078721cbfeb92fcd6393c8126f5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jun66j5" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=jun66j5"><img height="20" src="https://secure.gravatar.com/avatar/01ccca9477e1cc202836d9eda7de6318?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="trentrichardson" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=trentrichardson"><img height="20" src="https://secure.gravatar.com/avatar/ab4c8036b1eb49d51feac4ab23975c91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kdeng" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=kdeng"><img height="20" src="https://secure.gravatar.com/avatar/bf23039ce8a70067d51017f6e18b9c3e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="harbulot" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=harbulot"><img height="20" src="https://secure.gravatar.com/avatar/63edcce213b4c96b8b4a660e1df2da08?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="kapouer" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=kapouer"><img height="20" src="https://secure.gravatar.com/avatar/1a211d6ec19ccd9c41819fc05fdc41ab?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="michael-simons" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=michael-simons"><img height="20" src="https://secure.gravatar.com/avatar/20492a196bb034ad3aa7e05e593fede9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="aparshin" href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js?author=aparshin"><img height="20" src="https://secure.gravatar.com/avatar/822da39c5ac3a40a8d482daf580a0a9a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f57e263726287d2cd38aed4bce9648a8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/rossj">rossj</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1409c2ada52ccf319d943846bd064c3c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/kumm">kumm</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b5b17d3259b2265b49a5a99a82fa4151?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/ajgon">ajgon</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/46e3c01067064c75ba7bd94ce3ca0fb5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/sarxos">sarxos</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/896ec8e60011c692b3884bd1a246831a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/doublerebel">doublerebel</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4e8e630f3bb720cf84000155d56b3f81?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/TigerDX">TigerDX</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/712e78eeecccd676668b55f492c072d4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/vorapoap">vorapoap</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/2eeb23251f036ae9ab666f94711d8074?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/alexandergitter">alexandergitter</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5c327a2952c9f00c6ab96524529ae85e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/apepper">apepper</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/618a5078721cbfeb92fcd6393c8126f5?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/DuctTapeMan">DuctTapeMan</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/01ccca9477e1cc202836d9eda7de6318?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/jun66j5">jun66j5</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/ab4c8036b1eb49d51feac4ab23975c91?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/trentrichardson">trentrichardson</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/bf23039ce8a70067d51017f6e18b9c3e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/kdeng">kdeng</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/63edcce213b4c96b8b4a660e1df2da08?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/harbulot">harbulot</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/1a211d6ec19ccd9c41819fc05fdc41ab?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/kapouer">kapouer</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/20492a196bb034ad3aa7e05e593fede9?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/michael-simons">michael-simons</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/822da39c5ac3a40a8d482daf580a0a9a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/aparshin">aparshin</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="jquery-ui-timepicker-addon.js/" data-permalink-url="/trentrichardson/jQuery-Timepicker-Addon/blob/7b9ba9a5111fcb716c5eacafe922b6be484eae49/jquery-ui-timepicker-addon.js" data-title="jQuery-Timepicker-Addon/jquery-ui-timepicker-addon.js at master · trentrichardson/jQuery-Timepicker-Addon · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1531 lines (1370 sloc)</span>
                <span>56.252 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/trentrichardson/jQuery-Timepicker-Addon/edit/7b9ba9a5111fcb716c5eacafe922b6be484eae49/jquery-ui-timepicker-addon.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>
                <li>
                  <a href="/trentrichardson/jQuery-Timepicker-Addon/raw/master/jquery-ui-timepicker-addon.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/trentrichardson/jQuery-Timepicker-Addon/blame/master/jquery-ui-timepicker-addon.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/trentrichardson/jQuery-Timepicker-Addon/commits/master/jquery-ui-timepicker-addon.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">* jQuery timepicker addon</span></div><div class='line' id='LC3'><span class="cm">* By: Trent Richardson [http://trentrichardson.com]</span></div><div class='line' id='LC4'><span class="cm">* Version 1.0.1</span></div><div class='line' id='LC5'><span class="cm">* Last Modified: 07/01/2012</span></div><div class='line' id='LC6'><span class="cm">*</span></div><div class='line' id='LC7'><span class="cm">* Copyright 2012 Trent Richardson</span></div><div class='line' id='LC8'><span class="cm">* You may use this project under MIT or GPL licenses.</span></div><div class='line' id='LC9'><span class="cm">* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt</span></div><div class='line' id='LC10'><span class="cm">* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt</span></div><div class='line' id='LC11'><span class="cm">*</span></div><div class='line' id='LC12'><span class="cm">* HERES THE CSS:</span></div><div class='line' id='LC13'><span class="cm">* .ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }</span></div><div class='line' id='LC14'><span class="cm">* .ui-timepicker-div dl { text-align: left; }</span></div><div class='line' id='LC15'><span class="cm">* .ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }</span></div><div class='line' id='LC16'><span class="cm">* .ui-timepicker-div dl dd { margin: 0 10px 10px 65px; }</span></div><div class='line' id='LC17'><span class="cm">* .ui-timepicker-div td { font-size: 90%; }</span></div><div class='line' id='LC18'><span class="cm">* .ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }</span></div><div class='line' id='LC19'><span class="cm">*/</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="cm">/*jslint evil: true, maxlen: 300, white: false, undef: false, nomen: false, onevar: false */</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="c1">// Prevent &quot;Uncaught RangeError: Maximum call stack size exceeded&quot;</span></div><div class='line' id='LC26'><span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">timepicker</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">timepicker</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC27'><span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">version</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>	<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC29'><span class="p">}</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">ui</span><span class="p">,</span> <span class="p">{</span> <span class="nx">timepicker</span><span class="o">:</span> <span class="p">{</span> <span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;1.0.1&quot;</span> <span class="p">}</span> <span class="p">});</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="cm">/* Time picker manager.</span></div><div class='line' id='LC34'><span class="cm">   Use the singleton instance of this class, $.timepicker, to interact with the time picker.</span></div><div class='line' id='LC35'><span class="cm">   Settings for (groups of) time pickers are maintained in an instance object,</span></div><div class='line' id='LC36'><span class="cm">   allowing multiple different settings on the same page. */</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="kd">function</span> <span class="nx">Timepicker</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>	<span class="k">this</span><span class="p">.</span><span class="nx">regional</span> <span class="o">=</span> <span class="p">[];</span> <span class="c1">// Available regional settings, indexed by language code</span></div><div class='line' id='LC40'>	<span class="k">this</span><span class="p">.</span><span class="nx">regional</span><span class="p">[</span><span class="s1">&#39;&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="c1">// Default regional settings</span></div><div class='line' id='LC41'>		<span class="nx">currentText</span><span class="o">:</span> <span class="s1">&#39;Now&#39;</span><span class="p">,</span></div><div class='line' id='LC42'>		<span class="nx">closeText</span><span class="o">:</span> <span class="s1">&#39;Done&#39;</span><span class="p">,</span></div><div class='line' id='LC43'>		<span class="nx">ampm</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC44'>		<span class="nx">amNames</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;AM&#39;</span><span class="p">,</span> <span class="s1">&#39;A&#39;</span><span class="p">],</span></div><div class='line' id='LC45'>		<span class="nx">pmNames</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;PM&#39;</span><span class="p">,</span> <span class="s1">&#39;P&#39;</span><span class="p">],</span></div><div class='line' id='LC46'>		<span class="nx">timeFormat</span><span class="o">:</span> <span class="s1">&#39;hh:mm tt&#39;</span><span class="p">,</span></div><div class='line' id='LC47'>		<span class="nx">timeSuffix</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC48'>		<span class="nx">timeOnlyTitle</span><span class="o">:</span> <span class="s1">&#39;Choose Time&#39;</span><span class="p">,</span></div><div class='line' id='LC49'>		<span class="nx">timeText</span><span class="o">:</span> <span class="s1">&#39;Time&#39;</span><span class="p">,</span></div><div class='line' id='LC50'>		<span class="nx">hourText</span><span class="o">:</span> <span class="s1">&#39;Hour&#39;</span><span class="p">,</span></div><div class='line' id='LC51'>		<span class="nx">minuteText</span><span class="o">:</span> <span class="s1">&#39;Minute&#39;</span><span class="p">,</span></div><div class='line' id='LC52'>		<span class="nx">secondText</span><span class="o">:</span> <span class="s1">&#39;Second&#39;</span><span class="p">,</span></div><div class='line' id='LC53'>		<span class="nx">millisecText</span><span class="o">:</span> <span class="s1">&#39;Millisecond&#39;</span><span class="p">,</span></div><div class='line' id='LC54'>		<span class="nx">timezoneText</span><span class="o">:</span> <span class="s1">&#39;Time Zone&#39;</span></div><div class='line' id='LC55'>	<span class="p">};</span></div><div class='line' id='LC56'>	<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span> <span class="o">=</span> <span class="p">{</span> <span class="c1">// Global defaults for all the datetime picker instances</span></div><div class='line' id='LC57'>		<span class="nx">showButtonPanel</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC58'>		<span class="nx">timeOnly</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC59'>		<span class="nx">showHour</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC60'>		<span class="nx">showMinute</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC61'>		<span class="nx">showSecond</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC62'>		<span class="nx">showMillisec</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC63'>		<span class="nx">showTimezone</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC64'>		<span class="nx">showTime</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC65'>		<span class="nx">stepHour</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC66'>		<span class="nx">stepMinute</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC67'>		<span class="nx">stepSecond</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC68'>		<span class="nx">stepMillisec</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC69'>		<span class="nx">hour</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC70'>		<span class="nx">minute</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC71'>		<span class="nx">second</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC72'>		<span class="nx">millisec</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC73'>		<span class="nx">timezone</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC74'>		<span class="nx">useLocalTimezone</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC75'>		<span class="nx">defaultTimezone</span><span class="o">:</span> <span class="s2">&quot;+0000&quot;</span><span class="p">,</span></div><div class='line' id='LC76'>		<span class="nx">hourMin</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC77'>		<span class="nx">minuteMin</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC78'>		<span class="nx">secondMin</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC79'>		<span class="nx">millisecMin</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC80'>		<span class="nx">hourMax</span><span class="o">:</span> <span class="mi">23</span><span class="p">,</span></div><div class='line' id='LC81'>		<span class="nx">minuteMax</span><span class="o">:</span> <span class="mi">59</span><span class="p">,</span></div><div class='line' id='LC82'>		<span class="nx">secondMax</span><span class="o">:</span> <span class="mi">59</span><span class="p">,</span></div><div class='line' id='LC83'>		<span class="nx">millisecMax</span><span class="o">:</span> <span class="mi">999</span><span class="p">,</span></div><div class='line' id='LC84'>		<span class="nx">minDateTime</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC85'>		<span class="nx">maxDateTime</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC86'>		<span class="nx">onSelect</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC87'>		<span class="nx">hourGrid</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC88'>		<span class="nx">minuteGrid</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC89'>		<span class="nx">secondGrid</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC90'>		<span class="nx">millisecGrid</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC91'>		<span class="nx">alwaysSetTime</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC92'>		<span class="nx">separator</span><span class="o">:</span> <span class="s1">&#39; &#39;</span><span class="p">,</span></div><div class='line' id='LC93'>		<span class="nx">altFieldTimeOnly</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC94'>		<span class="nx">showTimepicker</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC95'>		<span class="nx">timezoneIso8601</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC96'>		<span class="nx">timezoneList</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC97'>		<span class="nx">addSliderAccess</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC98'>		<span class="nx">sliderAccessArgs</span><span class="o">:</span> <span class="kc">null</span></div><div class='line' id='LC99'>	<span class="p">};</span></div><div class='line' id='LC100'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">regional</span><span class="p">[</span><span class="s1">&#39;&#39;</span><span class="p">]);</span></div><div class='line' id='LC101'><span class="p">}</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">Timepicker</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC104'>	<span class="nx">$input</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC105'>	<span class="nx">$altInput</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC106'>	<span class="nx">$timeObj</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC107'>	<span class="nx">inst</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC108'>	<span class="nx">hour_slider</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC109'>	<span class="nx">minute_slider</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC110'>	<span class="nx">second_slider</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC111'>	<span class="nx">millisec_slider</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC112'>	<span class="nx">timezone_select</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC113'>	<span class="nx">hour</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC114'>	<span class="nx">minute</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC115'>	<span class="nx">second</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC116'>	<span class="nx">millisec</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC117'>	<span class="nx">timezone</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC118'>	<span class="nx">defaultTimezone</span><span class="o">:</span> <span class="s2">&quot;+0000&quot;</span><span class="p">,</span></div><div class='line' id='LC119'>	<span class="nx">hourMinOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC120'>	<span class="nx">minuteMinOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC121'>	<span class="nx">secondMinOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC122'>	<span class="nx">millisecMinOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC123'>	<span class="nx">hourMaxOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC124'>	<span class="nx">minuteMaxOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC125'>	<span class="nx">secondMaxOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC126'>	<span class="nx">millisecMaxOriginal</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC127'>	<span class="nx">ampm</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC128'>	<span class="nx">formattedDate</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC129'>	<span class="nx">formattedTime</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC130'>	<span class="nx">formattedDateTime</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC131'>	<span class="nx">timezoneList</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>	<span class="cm">/* Override the default settings for all instances of the time picker.</span></div><div class='line' id='LC134'><span class="cm">	   @param  settings  object - the new settings to use as defaults (anonymous object)</span></div><div class='line' id='LC135'><span class="cm">	   @return the manager object */</span></div><div class='line' id='LC136'>	<span class="nx">setDefaults</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>		<span class="nx">extendRemove</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span> <span class="nx">settings</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC138'>		<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC139'>	<span class="p">},</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC142'>	<span class="c1">// Create a new Timepicker instance</span></div><div class='line' id='LC143'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC144'>	<span class="nx">_newInst</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$input</span><span class="p">,</span> <span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>		<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Timepicker</span><span class="p">(),</span></div><div class='line' id='LC146'>			<span class="nx">inlineSettings</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">attrName</span> <span class="k">in</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>			<span class="kd">var</span> <span class="nx">attrValue</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;time:&#39;</span> <span class="o">+</span> <span class="nx">attrName</span><span class="p">);</span></div><div class='line' id='LC150'>			<span class="k">if</span> <span class="p">(</span><span class="nx">attrValue</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC152'>					<span class="nx">inlineSettings</span><span class="p">[</span><span class="nx">attrName</span><span class="p">]</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">attrValue</span><span class="p">);</span></div><div class='line' id='LC153'>				<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>					<span class="nx">inlineSettings</span><span class="p">[</span><span class="nx">attrName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">attrValue</span><span class="p">;</span></div><div class='line' id='LC155'>				<span class="p">}</span></div><div class='line' id='LC156'>			<span class="p">}</span></div><div class='line' id='LC157'>		<span class="p">}</span></div><div class='line' id='LC158'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span> <span class="nx">inlineSettings</span><span class="p">,</span> <span class="nx">o</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC159'>			<span class="nx">beforeShow</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">beforeShow</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC161'>					<span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">beforeShow</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC163'>			<span class="p">},</span></div><div class='line' id='LC164'>			<span class="nx">onChangeMonthYear</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC165'>				<span class="c1">// Update the time as well : this prevents the time from disappearing from the $input field.</span></div><div class='line' id='LC166'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">);</span></div><div class='line' id='LC167'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">onChangeMonthYear</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC168'>					<span class="nx">o</span><span class="p">.</span><span class="nx">onChangeMonthYear</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">year</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC170'>			<span class="p">},</span></div><div class='line' id='LC171'>			<span class="nx">onClose</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dateText</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC172'>				<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">timeDefined</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC175'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">onClose</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC176'>					<span class="nx">o</span><span class="p">.</span><span class="nx">onClose</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">dateText</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC178'>			<span class="p">},</span></div><div class='line' id='LC179'>			<span class="nx">timepicker</span><span class="o">:</span> <span class="nx">tp_inst</span> <span class="c1">// add timepicker as a property of datepicker: $.datepicker._get(dp_inst, &#39;timepicker&#39;);</span></div><div class='line' id='LC180'>		<span class="p">});</span></div><div class='line' id='LC181'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">amNames</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">amNames</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">val</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC182'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">pmNames</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">pmNames</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">val</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">();</span> <span class="p">});</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezoneList</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>			<span class="kd">var</span> <span class="nx">timezoneList</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC186'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">11</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;=</span> <span class="mi">12</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>				<span class="nx">timezoneList</span><span class="p">.</span><span class="nx">push</span><span class="p">((</span><span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;+&#39;</span> <span class="o">:</span> <span class="s1">&#39;-&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">i</span><span class="p">).</span><span class="nx">toString</span><span class="p">()).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;00&#39;</span><span class="p">);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC189'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezoneIso8601</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>				<span class="nx">timezoneList</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">timezoneList</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>					<span class="k">return</span> <span class="nx">val</span> <span class="o">==</span> <span class="s1">&#39;+0000&#39;</span> <span class="o">?</span> <span class="s1">&#39;Z&#39;</span> <span class="o">:</span> <span class="p">(</span><span class="nx">val</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">val</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">));</span></div><div class='line' id='LC192'>				<span class="p">});</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezoneList</span> <span class="o">=</span> <span class="nx">timezoneList</span><span class="p">;</span></div><div class='line' id='LC195'>		<span class="p">}</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">timezone</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezone</span><span class="p">;</span></div><div class='line' id='LC198'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hour</span><span class="p">;</span></div><div class='line' id='LC199'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minute</span><span class="p">;</span></div><div class='line' id='LC200'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">second</span><span class="p">;</span></div><div class='line' id='LC201'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisec</span><span class="p">;</span></div><div class='line' id='LC202'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">ampm</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC203'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">$input</span> <span class="o">=</span> <span class="nx">$input</span><span class="p">;</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>		<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">altField</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">$altInput</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">altField</span><span class="p">)</span></div><div class='line' id='LC207'>				<span class="p">.</span><span class="nx">css</span><span class="p">({</span> <span class="nx">cursor</span><span class="o">:</span> <span class="s1">&#39;pointer&#39;</span> <span class="p">})</span></div><div class='line' id='LC208'>				<span class="p">.</span><span class="nx">focus</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">$input</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;focus&quot;</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span><span class="o">===</span><span class="mi">0</span> <span class="o">||</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span><span class="o">===</span><span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC212'>		<span class="p">{</span></div><div class='line' id='LC213'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span><span class="o">=</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC214'>		<span class="p">}</span></div><div class='line' id='LC215'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span><span class="o">===</span><span class="mi">0</span> <span class="o">||</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span><span class="o">===</span><span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC216'>		<span class="p">{</span></div><div class='line' id='LC217'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span><span class="o">=</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC218'>		<span class="p">}</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>		<span class="c1">// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..</span></div><div class='line' id='LC221'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC224'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC227'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC230'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC233'>		<span class="k">return</span> <span class="nx">tp_inst</span><span class="p">;</span></div><div class='line' id='LC234'>	<span class="p">},</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC237'>	<span class="c1">// add our sliders to the calendar</span></div><div class='line' id='LC238'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC239'>	<span class="nx">_addTimePicker</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>		<span class="kd">var</span> <span class="nx">currDT</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">altFieldTimeOnly</span><span class="p">)</span> <span class="o">?</span></div><div class='line' id='LC241'>				<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">:</span></div><div class='line' id='LC242'>				<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC243'><br/></div><div class='line' id='LC244'>		<span class="k">this</span><span class="p">.</span><span class="nx">timeDefined</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_parseTime</span><span class="p">(</span><span class="nx">currDT</span><span class="p">);</span></div><div class='line' id='LC245'>		<span class="k">this</span><span class="p">.</span><span class="nx">_limitMinMaxDateTime</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC246'>		<span class="k">this</span><span class="p">.</span><span class="nx">_injectTimePicker</span><span class="p">();</span></div><div class='line' id='LC247'>	<span class="p">},</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC250'>	<span class="c1">// parse the time string from input value or _setTime</span></div><div class='line' id='LC251'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC252'>	<span class="nx">_parseTime</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">timeString</span><span class="p">,</span> <span class="nx">withDate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC254'>			<span class="k">this</span><span class="p">.</span><span class="nx">inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC255'>		<span class="p">}</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>		<span class="k">if</span> <span class="p">(</span><span class="nx">withDate</span> <span class="o">||</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeOnly</span><span class="p">)</span> </div><div class='line' id='LC258'>		<span class="p">{</span></div><div class='line' id='LC259'>			<span class="kd">var</span> <span class="nx">dp_dateFormat</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;dateFormat&#39;</span><span class="p">);</span></div><div class='line' id='LC260'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC261'>				<span class="kd">var</span> <span class="nx">parseRes</span> <span class="o">=</span> <span class="nx">parseDateTimeInternal</span><span class="p">(</span><span class="nx">dp_dateFormat</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">timeString</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getFormatConfig</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">),</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">);</span></div><div class='line' id='LC262'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">parseRes</span><span class="p">.</span><span class="nx">timeObj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC263'>				<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">parseRes</span><span class="p">.</span><span class="nx">timeObj</span><span class="p">);</span></div><div class='line' id='LC264'>			<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span></div><div class='line' id='LC265'>			<span class="p">{</span></div><div class='line' id='LC266'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC267'>			<span class="p">}</span></div><div class='line' id='LC268'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC269'>		<span class="p">}</span></div><div class='line' id='LC270'>		<span class="k">else</span></div><div class='line' id='LC271'>		<span class="p">{</span></div><div class='line' id='LC272'>			<span class="kd">var</span> <span class="nx">timeObj</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseTime</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">timeString</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">);</span></div><div class='line' id='LC273'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">timeObj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC274'>			<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">timeObj</span><span class="p">);</span></div><div class='line' id='LC275'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC276'>		<span class="p">}</span></div><div class='line' id='LC277'>	<span class="p">},</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC280'>	<span class="c1">// generate and inject html for timepicker into ui datepicker</span></div><div class='line' id='LC281'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC282'>	<span class="nx">_injectTimePicker</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC283'>		<span class="kd">var</span> <span class="nx">$dp</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">.</span><span class="nx">dpDiv</span><span class="p">,</span></div><div class='line' id='LC284'>			<span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span></div><div class='line' id='LC285'>			<span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC286'>			<span class="c1">// Added by Peter Medeiros:</span></div><div class='line' id='LC287'>			<span class="c1">// - Figure out what the hour/minute/second max should be based on the step values.</span></div><div class='line' id='LC288'>			<span class="c1">// - Example: if stepMinute is 15, then minMax is 45.</span></div><div class='line' id='LC289'>			<span class="nx">hourMax</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">-</span> <span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">)</span> <span class="o">%</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepHour</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC290'>			<span class="nx">minMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">-</span> <span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">)</span> <span class="o">%</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepMinute</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC291'>			<span class="nx">secMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">-</span> <span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">)</span> <span class="o">%</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepSecond</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC292'>			<span class="nx">millisecMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">-</span> <span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">)</span> <span class="o">%</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepMillisec</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC293'>			<span class="nx">dp_id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">.</span><span class="nx">id</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([^A-Za-z0-9_])/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>		<span class="c1">// Prevent displaying twice</span></div><div class='line' id='LC296'>		<span class="c1">//if ($dp.find(&quot;div#ui-timepicker-div-&quot;+ dp_id).length === 0) {</span></div><div class='line' id='LC297'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$dp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;div#ui-timepicker-div-&quot;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">showTimepicker</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC298'>			<span class="kd">var</span> <span class="nx">noDisplay</span> <span class="o">=</span> <span class="s1">&#39; style=&quot;display:none;&quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC299'>				<span class="nx">html</span> <span class="o">=</span>	<span class="s1">&#39;&lt;div class=&quot;ui-timepicker-div&quot; id=&quot;ui-timepicker-div-&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&lt;dl&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC300'>						<span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_time_label&quot; id=&quot;ui_tpicker_time_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC301'>						<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showTime</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timeText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC302'>						<span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_time&quot; id=&quot;ui_tpicker_time_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC303'>						<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showTime</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/dd&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC304'>						<span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_hour_label&quot; id=&quot;ui_tpicker_hour_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC305'>						<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showHour</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC306'>				<span class="nx">hourGridSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC307'>				<span class="nx">minuteGridSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC308'>				<span class="nx">secondGridSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC309'>				<span class="nx">millisecGridSize</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC310'>				<span class="nx">size</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Hours</span></div><div class='line' id='LC313'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_hour&quot;&gt;&lt;div id=&quot;ui_tpicker_hour_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC314'>						<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showHour</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC315'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showHour</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div style=&quot;padding-left: 1px&quot;&gt;&lt;table class=&quot;ui-tpicker-grid-label&quot;&gt;&lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">;</span> <span class="nx">h</span> <span class="o">&lt;=</span> <span class="nx">hourMax</span><span class="p">;</span> <span class="nx">h</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hourGrid</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC319'>					<span class="nx">hourGridSize</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC320'>					<span class="kd">var</span> <span class="nx">tmph</span> <span class="o">=</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">ampm</span> <span class="o">&amp;&amp;</span> <span class="nx">h</span> <span class="o">&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="o">?</span> <span class="nx">h</span><span class="o">-</span><span class="mi">12</span> <span class="o">:</span> <span class="nx">h</span><span class="p">;</span></div><div class='line' id='LC321'>					<span class="k">if</span> <span class="p">(</span><span class="nx">tmph</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="p">{</span> <span class="nx">tmph</span> <span class="o">=</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">tmph</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC322'>					<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">ampm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC323'>						<span class="k">if</span> <span class="p">(</span><span class="nx">h</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tmph</span> <span class="o">=</span> <span class="mi">12</span> <span class="o">+</span><span class="s1">&#39;a&#39;</span><span class="p">;</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">h</span> <span class="o">&lt;</span> <span class="mi">12</span><span class="p">)</span> <span class="p">{</span> <span class="nx">tmph</span> <span class="o">+=</span> <span class="s1">&#39;a&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC327'>						    <span class="k">else</span> <span class="p">{</span> <span class="nx">tmph</span> <span class="o">+=</span> <span class="s1">&#39;p&#39;</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC329'>					<span class="p">}</span></div><div class='line' id='LC330'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td&gt;&#39;</span> <span class="o">+</span> <span class="nx">tmph</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC331'>				<span class="p">}</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC334'>			<span class="p">}</span></div><div class='line' id='LC335'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/dd&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>			<span class="c1">// Minutes</span></div><div class='line' id='LC338'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_minute_label&quot; id=&quot;ui_tpicker_minute_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC339'>					<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMinute</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC340'>					<span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_minute&quot;&gt;&lt;div id=&quot;ui_tpicker_minute_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC341'>							<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMinute</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMinute</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC344'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div style=&quot;padding-left: 1px&quot;&gt;&lt;table class=&quot;ui-tpicker-grid-label&quot;&gt;&lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">;</span> <span class="nx">m</span> <span class="o">&lt;=</span> <span class="nx">minMax</span><span class="p">;</span> <span class="nx">m</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">minuteGrid</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC347'>					<span class="nx">minuteGridSize</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC348'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td&gt;&#39;</span> <span class="o">+</span> <span class="p">((</span><span class="nx">m</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">m</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC349'>				<span class="p">}</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC352'>			<span class="p">}</span></div><div class='line' id='LC353'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/dd&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>			<span class="c1">// Seconds</span></div><div class='line' id='LC356'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_second_label&quot; id=&quot;ui_tpicker_second_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC357'>					<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showSecond</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC358'>					<span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_second&quot;&gt;&lt;div id=&quot;ui_tpicker_second_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="o">+</span></div><div class='line' id='LC359'>							<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showSecond</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showSecond</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC362'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div style=&quot;padding-left: 1px&quot;&gt;&lt;table&gt;&lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">;</span> <span class="nx">s</span> <span class="o">&lt;=</span> <span class="nx">secMax</span><span class="p">;</span> <span class="nx">s</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">secondGrid</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC365'>					<span class="nx">secondGridSize</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC366'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td&gt;&#39;</span> <span class="o">+</span> <span class="p">((</span><span class="nx">s</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">s</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC367'>				<span class="p">}</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC370'>			<span class="p">}</span></div><div class='line' id='LC371'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/dd&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>			<span class="c1">// Milliseconds</span></div><div class='line' id='LC374'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_millisec_label&quot; id=&quot;ui_tpicker_millisec_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC375'>					<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMillisec</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC376'>					<span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_millisec&quot;&gt;&lt;div id=&quot;ui_tpicker_millisec_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="o">+</span></div><div class='line' id='LC377'>							<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMillisec</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMillisec</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC380'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;div style=&quot;padding-left: 1px&quot;&gt;&lt;table&gt;&lt;tr&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>				<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">;</span> <span class="nx">l</span> <span class="o">&lt;=</span> <span class="nx">millisecMax</span><span class="p">;</span> <span class="nx">l</span> <span class="o">+=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">millisecGrid</span><span class="p">,</span><span class="mi">10</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC383'>					<span class="nx">millisecGridSize</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC384'>					<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;td&gt;&#39;</span> <span class="o">+</span> <span class="p">((</span><span class="nx">l</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">l</span> <span class="o">+</span> <span class="s1">&#39;&lt;/td&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC385'>				<span class="p">}</span></div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>				<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/tr&gt;&lt;/table&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC388'>			<span class="p">}</span></div><div class='line' id='LC389'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/dd&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>			<span class="c1">// Timezone</span></div><div class='line' id='LC392'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dt class=&quot;ui_tpicker_timezone_label&quot; id=&quot;ui_tpicker_timezone_label_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span></div><div class='line' id='LC393'>					<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showTimezone</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timezoneText</span> <span class="o">+</span> <span class="s1">&#39;&lt;/dt&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC394'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;dd class=&quot;ui_tpicker_timezone&quot; id=&quot;ui_tpicker_timezone_&#39;</span> <span class="o">+</span> <span class="nx">dp_id</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span>	<span class="o">+</span></div><div class='line' id='LC395'>							<span class="p">((</span><span class="nx">o</span><span class="p">.</span><span class="nx">showTimezone</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">noDisplay</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&gt;&lt;/dd&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>			<span class="nx">html</span> <span class="o">+=</span> <span class="s1">&#39;&lt;/dl&gt;&lt;/div&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC398'>			<span class="kd">var</span> <span class="nx">$tp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">html</span><span class="p">);</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>				<span class="c1">// if we only want time picker...</span></div><div class='line' id='LC401'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>				<span class="nx">$tp</span><span class="p">.</span><span class="nx">prepend</span><span class="p">(</span></div><div class='line' id='LC403'>					<span class="s1">&#39;&lt;div class=&quot;ui-widget-header ui-helper-clearfix ui-corner-all&quot;&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC404'>						<span class="s1">&#39;&lt;div class=&quot;ui-datepicker-title&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timeOnlyTitle</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC405'>					<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC406'>				<span class="nx">$dp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-datepicker-header, .ui-datepicker-calendar&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC407'>			<span class="p">}</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>			<span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_hour_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">slider</span><span class="p">({</span></div><div class='line' id='LC410'>				<span class="nx">orientation</span><span class="o">:</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">,</span></div><div class='line' id='LC411'>				<span class="nx">value</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span></div><div class='line' id='LC412'>				<span class="nx">min</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">,</span></div><div class='line' id='LC413'>				<span class="nx">max</span><span class="o">:</span> <span class="nx">hourMax</span><span class="p">,</span></div><div class='line' id='LC414'>				<span class="nx">step</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepHour</span><span class="p">,</span></div><div class='line' id='LC415'>				<span class="nx">slide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC416'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span> <span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC417'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC418'>				<span class="p">}</span></div><div class='line' id='LC419'>			<span class="p">});</span></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'><br/></div><div class='line' id='LC422'>			<span class="c1">// Updated by Peter Medeiros:</span></div><div class='line' id='LC423'>			<span class="c1">// - Pass in Event and UI instance into slide function</span></div><div class='line' id='LC424'>			<span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_minute_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">slider</span><span class="p">({</span></div><div class='line' id='LC425'>				<span class="nx">orientation</span><span class="o">:</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">,</span></div><div class='line' id='LC426'>				<span class="nx">value</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span></div><div class='line' id='LC427'>				<span class="nx">min</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">,</span></div><div class='line' id='LC428'>				<span class="nx">max</span><span class="o">:</span> <span class="nx">minMax</span><span class="p">,</span></div><div class='line' id='LC429'>				<span class="nx">step</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepMinute</span><span class="p">,</span></div><div class='line' id='LC430'>				<span class="nx">slide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC431'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span> <span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC432'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC433'>				<span class="p">}</span></div><div class='line' id='LC434'>			<span class="p">});</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>			<span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_second_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">slider</span><span class="p">({</span></div><div class='line' id='LC437'>				<span class="nx">orientation</span><span class="o">:</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">,</span></div><div class='line' id='LC438'>				<span class="nx">value</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span></div><div class='line' id='LC439'>				<span class="nx">min</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">,</span></div><div class='line' id='LC440'>				<span class="nx">max</span><span class="o">:</span> <span class="nx">secMax</span><span class="p">,</span></div><div class='line' id='LC441'>				<span class="nx">step</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepSecond</span><span class="p">,</span></div><div class='line' id='LC442'>				<span class="nx">slide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC443'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span> <span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC444'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC445'>				<span class="p">}</span></div><div class='line' id='LC446'>			<span class="p">});</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>			<span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_millisec_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">slider</span><span class="p">({</span></div><div class='line' id='LC449'>				<span class="nx">orientation</span><span class="o">:</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">,</span></div><div class='line' id='LC450'>				<span class="nx">value</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span><span class="p">,</span></div><div class='line' id='LC451'>				<span class="nx">min</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">,</span></div><div class='line' id='LC452'>				<span class="nx">max</span><span class="o">:</span> <span class="nx">millisecMax</span><span class="p">,</span></div><div class='line' id='LC453'>				<span class="nx">step</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">stepMillisec</span><span class="p">,</span></div><div class='line' id='LC454'>				<span class="nx">slide</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">ui</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC455'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span> <span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">ui</span><span class="p">.</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC456'>					<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC457'>				<span class="p">}</span></div><div class='line' id='LC458'>			<span class="p">});</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>			<span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_timezone_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;select&gt;&lt;/select&gt;&#39;</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;select&quot;</span><span class="p">);</span></div><div class='line' id='LC461'>			<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">append</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">,</span></div><div class='line' id='LC462'>				<span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">timezoneList</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">idx</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC463'>					<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;option /&gt;&quot;</span><span class="p">)</span></div><div class='line' id='LC464'>						<span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">val</span> <span class="o">==</span> <span class="s2">&quot;object&quot;</span> <span class="o">?</span> <span class="nx">val</span><span class="p">.</span><span class="nx">value</span> <span class="o">:</span> <span class="nx">val</span><span class="p">)</span></div><div class='line' id='LC465'>						<span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">val</span> <span class="o">==</span> <span class="s2">&quot;object&quot;</span> <span class="o">?</span> <span class="nx">val</span><span class="p">.</span><span class="nx">label</span> <span class="o">:</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC466'>				<span class="p">})</span></div><div class='line' id='LC467'>			<span class="p">);</span></div><div class='line' id='LC468'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timezone</span><span class="p">)</span> <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC469'>				<span class="kd">var</span> <span class="nx">local_date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">.</span><span class="nx">selectedYear</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">.</span><span class="nx">selectedMonth</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">.</span><span class="nx">selectedDay</span><span class="p">,</span> <span class="mi">12</span><span class="p">);</span></div><div class='line' id='LC470'>				<span class="kd">var</span> <span class="nx">local_timezone</span> <span class="o">=</span> <span class="nx">timeZoneString</span><span class="p">(</span><span class="nx">local_date</span><span class="p">);</span></div><div class='line' id='LC471'>				<span class="k">if</span> <span class="p">(</span><span class="nx">local_timezone</span> <span class="o">==</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC472'>					<span class="nx">selectLocalTimeZone</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC473'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC474'>					<span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timezone</span><span class="p">);</span></div><div class='line' id='LC475'>				<span class="p">}</span></div><div class='line' id='LC476'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC477'>				<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hour</span><span class="p">)</span> <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">!==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC478'>					<span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">defaultTimezone</span><span class="p">);</span></div><div class='line' id='LC479'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC480'>					<span class="nx">selectLocalTimeZone</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC481'>				<span class="p">}</span></div><div class='line' id='LC482'>			<span class="p">}</span></div><div class='line' id='LC483'>			<span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">.</span><span class="nx">change</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC484'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">useLocalTimezone</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC485'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC486'>			<span class="p">});</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>			<span class="c1">// Add grid functionality</span></div><div class='line' id='LC489'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showHour</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC490'>				<span class="nx">size</span> <span class="o">=</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">hourGridSize</span> <span class="o">*</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourGrid</span> <span class="o">/</span> <span class="p">(</span><span class="nx">hourMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">);</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>				<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.ui_tpicker_hour table&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC493'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">size</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC494'>					<span class="nx">marginLeft</span><span class="o">:</span> <span class="p">(</span><span class="nx">size</span> <span class="o">/</span> <span class="p">(</span><span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">hourGridSize</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC495'>					<span class="nx">borderCollapse</span><span class="o">:</span> <span class="s1">&#39;collapse&#39;</span></div><div class='line' id='LC496'>				<span class="p">}).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span> <span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC497'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC498'>						<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">html</span><span class="p">();</span></div><div class='line' id='LC499'>						<span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">ampm</span><span class="p">)</span>	<span class="p">{</span></div><div class='line' id='LC500'>							<span class="kd">var</span> <span class="nx">ap</span> <span class="o">=</span> <span class="nx">h</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">2</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC501'>								<span class="nx">aph</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC502'>							<span class="k">if</span> <span class="p">(</span><span class="nx">ap</span> <span class="o">==</span> <span class="s1">&#39;a&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC503'>								<span class="k">if</span> <span class="p">(</span><span class="nx">aph</span> <span class="o">==</span> <span class="mi">12</span><span class="p">)</span> <span class="p">{</span> <span class="nx">h</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC504'>								<span class="k">else</span> <span class="p">{</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">aph</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC505'>							<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">aph</span> <span class="o">==</span> <span class="mi">12</span><span class="p">)</span> <span class="p">{</span> <span class="nx">h</span> <span class="o">=</span> <span class="mi">12</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC506'>							<span class="k">else</span> <span class="p">{</span> <span class="nx">h</span> <span class="o">=</span> <span class="nx">aph</span> <span class="o">+</span> <span class="mi">12</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC507'>						<span class="p">}</span></div><div class='line' id='LC508'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC509'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC510'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onSelectHandler</span><span class="p">();</span></div><div class='line' id='LC511'>					<span class="p">}).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC512'>						<span class="nx">cursor</span><span class="o">:</span> <span class="s1">&#39;pointer&#39;</span><span class="p">,</span></div><div class='line' id='LC513'>						<span class="nx">width</span><span class="o">:</span> <span class="p">(</span><span class="mi">100</span> <span class="o">/</span> <span class="nx">hourGridSize</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;%&#39;</span><span class="p">,</span></div><div class='line' id='LC514'>						<span class="nx">textAlign</span><span class="o">:</span> <span class="s1">&#39;center&#39;</span><span class="p">,</span></div><div class='line' id='LC515'>						<span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span></div><div class='line' id='LC516'>					<span class="p">});</span></div><div class='line' id='LC517'>				<span class="p">});</span></div><div class='line' id='LC518'>			<span class="p">}</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMinute</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC521'>				<span class="nx">size</span> <span class="o">=</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">minuteGridSize</span> <span class="o">*</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteGrid</span> <span class="o">/</span> <span class="p">(</span><span class="nx">minMax</span> <span class="o">-</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">);</span></div><div class='line' id='LC522'>				<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.ui_tpicker_minute table&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC523'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">size</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC524'>					<span class="nx">marginLeft</span><span class="o">:</span> <span class="p">(</span><span class="nx">size</span> <span class="o">/</span> <span class="p">(</span><span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">minuteGridSize</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC525'>					<span class="nx">borderCollapse</span><span class="o">:</span> <span class="s1">&#39;collapse&#39;</span></div><div class='line' id='LC526'>				<span class="p">}).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC527'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC528'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">html</span><span class="p">());</span></div><div class='line' id='LC529'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC530'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onSelectHandler</span><span class="p">();</span></div><div class='line' id='LC531'>					<span class="p">}).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC532'>						<span class="nx">cursor</span><span class="o">:</span> <span class="s1">&#39;pointer&#39;</span><span class="p">,</span></div><div class='line' id='LC533'>						<span class="nx">width</span><span class="o">:</span> <span class="p">(</span><span class="mi">100</span> <span class="o">/</span> <span class="nx">minuteGridSize</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;%&#39;</span><span class="p">,</span></div><div class='line' id='LC534'>						<span class="nx">textAlign</span><span class="o">:</span> <span class="s1">&#39;center&#39;</span><span class="p">,</span></div><div class='line' id='LC535'>						<span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span></div><div class='line' id='LC536'>					<span class="p">});</span></div><div class='line' id='LC537'>				<span class="p">});</span></div><div class='line' id='LC538'>			<span class="p">}</span></div><div class='line' id='LC539'><br/></div><div class='line' id='LC540'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showSecond</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC541'>				<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.ui_tpicker_second table&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC542'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">size</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC543'>					<span class="nx">marginLeft</span><span class="o">:</span> <span class="p">(</span><span class="nx">size</span> <span class="o">/</span> <span class="p">(</span><span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">secondGridSize</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC544'>					<span class="nx">borderCollapse</span><span class="o">:</span> <span class="s1">&#39;collapse&#39;</span></div><div class='line' id='LC545'>				<span class="p">}).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC546'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC547'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">html</span><span class="p">());</span></div><div class='line' id='LC548'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC549'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onSelectHandler</span><span class="p">();</span></div><div class='line' id='LC550'>					<span class="p">}).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC551'>						<span class="nx">cursor</span><span class="o">:</span> <span class="s1">&#39;pointer&#39;</span><span class="p">,</span></div><div class='line' id='LC552'>						<span class="nx">width</span><span class="o">:</span> <span class="p">(</span><span class="mi">100</span> <span class="o">/</span> <span class="nx">secondGridSize</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;%&#39;</span><span class="p">,</span></div><div class='line' id='LC553'>						<span class="nx">textAlign</span><span class="o">:</span> <span class="s1">&#39;center&#39;</span><span class="p">,</span></div><div class='line' id='LC554'>						<span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span></div><div class='line' id='LC555'>					<span class="p">});</span></div><div class='line' id='LC556'>				<span class="p">});</span></div><div class='line' id='LC557'>			<span class="p">}</span></div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>			<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">showMillisec</span> <span class="o">&amp;&amp;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecGrid</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC560'>				<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.ui_tpicker_millisec table&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC561'>					<span class="nx">width</span><span class="o">:</span> <span class="nx">size</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC562'>					<span class="nx">marginLeft</span><span class="o">:</span> <span class="p">(</span><span class="nx">size</span> <span class="o">/</span> <span class="p">(</span><span class="o">-</span><span class="mi">2</span> <span class="o">*</span> <span class="nx">millisecGridSize</span><span class="p">))</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span></div><div class='line' id='LC563'>					<span class="nx">borderCollapse</span><span class="o">:</span> <span class="s1">&#39;collapse&#39;</span></div><div class='line' id='LC564'>				<span class="p">}).</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>					<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC566'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="s2">&quot;value&quot;</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">html</span><span class="p">());</span></div><div class='line' id='LC567'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC568'>						<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onSelectHandler</span><span class="p">();</span></div><div class='line' id='LC569'>					<span class="p">}).</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC570'>						<span class="nx">cursor</span><span class="o">:</span> <span class="s1">&#39;pointer&#39;</span><span class="p">,</span></div><div class='line' id='LC571'>						<span class="nx">width</span><span class="o">:</span> <span class="p">(</span><span class="mi">100</span> <span class="o">/</span> <span class="nx">millisecGridSize</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;%&#39;</span><span class="p">,</span></div><div class='line' id='LC572'>						<span class="nx">textAlign</span><span class="o">:</span> <span class="s1">&#39;center&#39;</span><span class="p">,</span></div><div class='line' id='LC573'>						<span class="nx">overflow</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span></div><div class='line' id='LC574'>					<span class="p">});</span></div><div class='line' id='LC575'>				<span class="p">});</span></div><div class='line' id='LC576'>			<span class="p">}</span></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'>			<span class="kd">var</span> <span class="nx">$buttonPanel</span> <span class="o">=</span> <span class="nx">$dp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-datepicker-buttonpane&#39;</span><span class="p">);</span></div><div class='line' id='LC579'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$buttonPanel</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$buttonPanel</span><span class="p">.</span><span class="nx">before</span><span class="p">(</span><span class="nx">$tp</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC580'>			<span class="k">else</span> <span class="p">{</span> <span class="nx">$dp</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">$tp</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>			<span class="k">this</span><span class="p">.</span><span class="nx">$timeObj</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#ui_tpicker_time_&#39;</span><span class="o">+</span> <span class="nx">dp_id</span><span class="p">);</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC585'>				<span class="kd">var</span> <span class="nx">timeDefined</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">timeDefined</span><span class="p">;</span></div><div class='line' id='LC586'>				<span class="k">this</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC587'>				<span class="k">this</span><span class="p">.</span><span class="nx">timeDefined</span> <span class="o">=</span> <span class="nx">timeDefined</span><span class="p">;</span></div><div class='line' id='LC588'>			<span class="p">}</span></div><div class='line' id='LC589'><br/></div><div class='line' id='LC590'>			<span class="c1">//Emulate datepicker onSelect behavior. Call on slidestop.</span></div><div class='line' id='LC591'>			<span class="kd">var</span> <span class="nx">onSelectDelegate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC592'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onSelectHandler</span><span class="p">();</span></div><div class='line' id='LC593'>			<span class="p">};</span></div><div class='line' id='LC594'>			<span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;slidestop&#39;</span><span class="p">,</span><span class="nx">onSelectDelegate</span><span class="p">);</span></div><div class='line' id='LC595'>			<span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;slidestop&#39;</span><span class="p">,</span><span class="nx">onSelectDelegate</span><span class="p">);</span></div><div class='line' id='LC596'>			<span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;slidestop&#39;</span><span class="p">,</span><span class="nx">onSelectDelegate</span><span class="p">);</span></div><div class='line' id='LC597'>			<span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;slidestop&#39;</span><span class="p">,</span><span class="nx">onSelectDelegate</span><span class="p">);</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'>			<span class="c1">// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/</span></div><div class='line' id='LC600'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">addSliderAccess</span><span class="p">){</span></div><div class='line' id='LC601'>				<span class="kd">var</span> <span class="nx">sliderAccessArgs</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">sliderAccessArgs</span><span class="p">;</span></div><div class='line' id='LC602'>				<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="c1">// fix for inline mode</span></div><div class='line' id='LC603'>					<span class="k">if</span><span class="p">(</span><span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-slider-access&#39;</span><span class="p">).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">){</span></div><div class='line' id='LC604'>						<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-slider:visible&#39;</span><span class="p">).</span><span class="nx">sliderAccess</span><span class="p">(</span><span class="nx">sliderAccessArgs</span><span class="p">);</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>						<span class="c1">// fix any grids since sliders are shorter</span></div><div class='line' id='LC607'>						<span class="kd">var</span> <span class="nx">sliderAccessWidth</span> <span class="o">=</span> <span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;.ui-slider-access:eq(0)&#39;</span><span class="p">).</span><span class="nx">outerWidth</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC608'>						<span class="k">if</span><span class="p">(</span><span class="nx">sliderAccessWidth</span><span class="p">){</span></div><div class='line' id='LC609'>							<span class="nx">$tp</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;table:visible&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC610'>								<span class="kd">var</span> <span class="nx">$g</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC611'>									<span class="nx">oldWidth</span> <span class="o">=</span> <span class="nx">$g</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">(),</span></div><div class='line' id='LC612'>									<span class="nx">oldMarginLeft</span> <span class="o">=</span> <span class="nx">$g</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;marginLeft&#39;</span><span class="p">).</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;%&#39;</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">),</span></div><div class='line' id='LC613'>									<span class="nx">newWidth</span> <span class="o">=</span> <span class="nx">oldWidth</span> <span class="o">-</span> <span class="nx">sliderAccessWidth</span><span class="p">,</span></div><div class='line' id='LC614'>									<span class="nx">newMarginLeft</span> <span class="o">=</span> <span class="p">((</span><span class="nx">oldMarginLeft</span> <span class="o">*</span> <span class="nx">newWidth</span><span class="p">)</span><span class="o">/</span><span class="nx">oldWidth</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;%&#39;</span><span class="p">;</span></div><div class='line' id='LC615'><br/></div><div class='line' id='LC616'>								<span class="nx">$g</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span> <span class="nx">width</span><span class="o">:</span> <span class="nx">newWidth</span><span class="p">,</span> <span class="nx">marginLeft</span><span class="o">:</span> <span class="nx">newMarginLeft</span> <span class="p">});</span></div><div class='line' id='LC617'>							<span class="p">});</span></div><div class='line' id='LC618'>						<span class="p">}</span></div><div class='line' id='LC619'>					<span class="p">}</span></div><div class='line' id='LC620'>				<span class="p">},</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC621'>			<span class="p">}</span></div><div class='line' id='LC622'>			<span class="c1">// end slideAccess integration</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>		<span class="p">}</span></div><div class='line' id='LC625'>	<span class="p">},</span></div><div class='line' id='LC626'><br/></div><div class='line' id='LC627'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC628'>	<span class="c1">// This function tries to limit the ability to go outside the</span></div><div class='line' id='LC629'>	<span class="c1">// min/max date range</span></div><div class='line' id='LC630'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC631'>	<span class="nx">_limitMinMaxDateTime</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="nx">adjustSliders</span><span class="p">){</span></div><div class='line' id='LC632'>		<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span></div><div class='line' id='LC633'>			<span class="nx">dp_date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedYear</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedMonth</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedDay</span><span class="p">);</span></div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">showTimepicker</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span> <span class="c1">// No time so nothing to check here</span></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'>		<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;minDateTime&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;minDateTime&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">dp_date</span><span class="p">){</span></div><div class='line' id='LC638'>			<span class="kd">var</span> <span class="nx">minDateTime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;minDateTime&#39;</span><span class="p">),</span></div><div class='line' id='LC639'>				<span class="nx">minDateTimeDate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(),</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC640'><br/></div><div class='line' id='LC641'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hourMinOriginal</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMinOriginal</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMinOriginal</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMinOriginal</span> <span class="o">===</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC642'>				<span class="k">this</span><span class="p">.</span><span class="nx">hourMinOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">;</span></div><div class='line' id='LC643'>				<span class="k">this</span><span class="p">.</span><span class="nx">minuteMinOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">;</span></div><div class='line' id='LC644'>				<span class="k">this</span><span class="p">.</span><span class="nx">secondMinOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">;</span></div><div class='line' id='LC645'>				<span class="k">this</span><span class="p">.</span><span class="nx">millisecMinOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">;</span></div><div class='line' id='LC646'>			<span class="p">}</span></div><div class='line' id='LC647'><br/></div><div class='line' id='LC648'>			<span class="k">if</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">||</span> <span class="nx">minDateTimeDate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">==</span> <span class="nx">dp_date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC649'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span> <span class="o">=</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getHours</span><span class="p">();</span></div><div class='line' id='LC650'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC651'>					<span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">;</span></div><div class='line' id='LC652'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span> <span class="o">=</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">();</span></div><div class='line' id='LC653'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC654'>						<span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">;</span></div><div class='line' id='LC655'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span> <span class="o">=</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">();</span></div><div class='line' id='LC656'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">&lt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">){</span></div><div class='line' id='LC657'>						<span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">;</span></div><div class='line' id='LC658'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span> <span class="o">=</span> <span class="nx">minDateTime</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">();</span></div><div class='line' id='LC659'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC660'>						<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">&lt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>							<span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">;</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC663'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMinOriginal</span><span class="p">;</span></div><div class='line' id='LC664'>					<span class="p">}</span></div><div class='line' id='LC665'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC666'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMinOriginal</span><span class="p">;</span></div><div class='line' id='LC667'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMinOriginal</span><span class="p">;</span></div><div class='line' id='LC668'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMinOriginal</span><span class="p">;</span></div><div class='line' id='LC669'>				<span class="p">}</span></div><div class='line' id='LC670'>			<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC671'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hourMinOriginal</span><span class="p">;</span></div><div class='line' id='LC672'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMinOriginal</span><span class="p">;</span></div><div class='line' id='LC673'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMinOriginal</span><span class="p">;</span></div><div class='line' id='LC674'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMinOriginal</span><span class="p">;</span></div><div class='line' id='LC675'>			<span class="p">}</span></div><div class='line' id='LC676'>		<span class="p">}</span></div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>		<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;maxDateTime&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;maxDateTime&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">dp_date</span><span class="p">){</span></div><div class='line' id='LC679'>			<span class="kd">var</span> <span class="nx">maxDateTime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;maxDateTime&#39;</span><span class="p">),</span></div><div class='line' id='LC680'>				<span class="nx">maxDateTimeDate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">(),</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">(),</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getDate</span><span class="p">(),</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC681'><br/></div><div class='line' id='LC682'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hourMaxOriginal</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMaxOriginal</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMaxOriginal</span> <span class="o">===</span> <span class="kc">null</span><span class="p">){</span></div><div class='line' id='LC683'>				<span class="k">this</span><span class="p">.</span><span class="nx">hourMaxOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">hourMax</span><span class="p">;</span></div><div class='line' id='LC684'>				<span class="k">this</span><span class="p">.</span><span class="nx">minuteMaxOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">minuteMax</span><span class="p">;</span></div><div class='line' id='LC685'>				<span class="k">this</span><span class="p">.</span><span class="nx">secondMaxOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">secondMax</span><span class="p">;</span></div><div class='line' id='LC686'>				<span class="k">this</span><span class="p">.</span><span class="nx">millisecMaxOriginal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">millisecMax</span><span class="p">;</span></div><div class='line' id='LC687'>			<span class="p">}</span></div><div class='line' id='LC688'><br/></div><div class='line' id='LC689'>			<span class="k">if</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">||</span> <span class="nx">maxDateTimeDate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">==</span> <span class="nx">dp_date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()){</span></div><div class='line' id='LC690'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">=</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getHours</span><span class="p">();</span></div><div class='line' id='LC691'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC692'>					<span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span><span class="p">;</span></div><div class='line' id='LC693'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">=</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">();</span></div><div class='line' id='LC694'>					<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC695'>						<span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span><span class="p">;</span></div><div class='line' id='LC696'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">=</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">();</span></div><div class='line' id='LC697'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC698'>						<span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span><span class="p">;</span></div><div class='line' id='LC699'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">=</span> <span class="nx">maxDateTime</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">();</span></div><div class='line' id='LC700'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC701'>						<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC702'>						<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC703'>					<span class="p">}</span></div><div class='line' id='LC704'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC705'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC706'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC707'>					<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC708'>				<span class="p">}</span></div><div class='line' id='LC709'>			<span class="p">}</span><span class="k">else</span><span class="p">{</span></div><div class='line' id='LC710'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hourMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC711'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minuteMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC712'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">secondMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC713'>				<span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisecMaxOriginal</span><span class="p">;</span></div><div class='line' id='LC714'>			<span class="p">}</span></div><div class='line' id='LC715'>		<span class="p">}</span></div><div class='line' id='LC716'><br/></div><div class='line' id='LC717'>		<span class="k">if</span><span class="p">(</span><span class="nx">adjustSliders</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">adjustSliders</span> <span class="o">===</span> <span class="kc">true</span><span class="p">){</span></div><div class='line' id='LC718'>			<span class="kd">var</span> <span class="nx">hourMax</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">-</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMax</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">)</span> <span class="o">%</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">stepHour</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">minMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">-</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMax</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">)</span> <span class="o">%</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">stepMinute</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">secMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">-</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">)</span> <span class="o">%</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">stepSecond</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">),</span></div><div class='line' id='LC721'>				<span class="nx">millisecMax</span>  <span class="o">=</span> <span class="nb">parseInt</span><span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">-</span> <span class="p">((</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMax</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">)</span> <span class="o">%</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">stepMillisec</span><span class="p">))</span> <span class="p">,</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC722'><br/></div><div class='line' id='LC723'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC724'>				<span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">min</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">,</span> <span class="nx">max</span><span class="o">:</span> <span class="nx">hourMax</span> <span class="p">}).</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span><span class="p">);</span></div><div class='line' id='LC725'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC726'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC727'>				<span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">min</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">,</span> <span class="nx">max</span><span class="o">:</span> <span class="nx">minMax</span> <span class="p">}).</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute</span><span class="p">);</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC729'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">){</span></div><div class='line' id='LC730'>				<span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">min</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">,</span> <span class="nx">max</span><span class="o">:</span> <span class="nx">secMax</span> <span class="p">}).</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">second</span><span class="p">);</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC732'>			<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC733'>				<span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s2">&quot;option&quot;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">min</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">,</span> <span class="nx">max</span><span class="o">:</span> <span class="nx">millisecMax</span> <span class="p">}).</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span><span class="p">);</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC735'>		<span class="p">}</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>	<span class="p">},</span></div><div class='line' id='LC738'><br/></div><div class='line' id='LC739'><br/></div><div class='line' id='LC740'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC741'>	<span class="c1">// when a slider moves, set the internal time...</span></div><div class='line' id='LC742'>	<span class="c1">// on time change is also called when the time is updated in the text field</span></div><div class='line' id='LC743'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC744'>	<span class="nx">_onTimeChange</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC745'>		<span class="kd">var</span> <span class="nx">hour</span>   <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC746'>			<span class="nx">minute</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC747'>			<span class="nx">second</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC748'>			<span class="nx">millisec</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC749'>			<span class="nx">timezone</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC750'>			<span class="nx">o</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">;</span></div><div class='line' id='LC751'><br/></div><div class='line' id='LC752'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">hour</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">hour</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC753'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">minute</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">minute</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC754'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">second</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">second</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC755'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">millisec</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">millisec</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC756'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">timezone</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">timezone</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC757'><br/></div><div class='line' id='LC758'>		<span class="k">if</span> <span class="p">(</span><span class="nx">hour</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="nx">hour</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">hour</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC759'>		<span class="k">if</span> <span class="p">(</span><span class="nx">minute</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="nx">minute</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">minute</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC760'>		<span class="k">if</span> <span class="p">(</span><span class="nx">second</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="nx">second</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">second</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC761'>		<span class="k">if</span> <span class="p">(</span><span class="nx">millisec</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="nx">millisec</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">millisec</span><span class="p">,</span><span class="mi">10</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC762'><br/></div><div class='line' id='LC763'>		<span class="kd">var</span> <span class="nx">ampm</span> <span class="o">=</span> <span class="nx">o</span><span class="p">[</span><span class="nx">hour</span> <span class="o">&lt;</span> <span class="mi">12</span> <span class="o">?</span> <span class="s1">&#39;amNames&#39;</span> <span class="o">:</span> <span class="s1">&#39;pmNames&#39;</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>		<span class="c1">// If the update was done in the input field, the input field should not be updated.</span></div><div class='line' id='LC766'>		<span class="c1">// If the update was done using the sliders, update the input field.</span></div><div class='line' id='LC767'>		<span class="kd">var</span> <span class="nx">hasChanged</span> <span class="o">=</span> <span class="p">(</span><span class="nx">hour</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">||</span> <span class="nx">minute</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">||</span></div><div class='line' id='LC768'>				<span class="nx">second</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">||</span> <span class="nx">millisec</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">||</span></div><div class='line' id='LC769'>				<span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ampm</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC770'>				    <span class="p">(</span><span class="nx">hour</span> <span class="o">&lt;</span> <span class="mi">12</span><span class="p">)</span> <span class="o">!=</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ampm</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">(),</span> <span class="k">this</span><span class="p">.</span><span class="nx">amNames</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">))</span> <span class="o">||</span></div><div class='line' id='LC771'>				<span class="nx">timezone</span> <span class="o">!=</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span><span class="p">);</span></div><div class='line' id='LC772'><br/></div><div class='line' id='LC773'>		<span class="k">if</span> <span class="p">(</span><span class="nx">hasChanged</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'><br/></div><div class='line' id='LC775'>			<span class="k">if</span> <span class="p">(</span><span class="nx">hour</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="nx">hour</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC776'>			<span class="k">if</span> <span class="p">(</span><span class="nx">minute</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="nx">minute</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC777'>			<span class="k">if</span> <span class="p">(</span><span class="nx">second</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="nx">second</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC778'>			<span class="k">if</span> <span class="p">(</span><span class="nx">millisec</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="nx">millisec</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC779'>			<span class="k">if</span> <span class="p">(</span><span class="nx">timezone</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span> <span class="o">=</span> <span class="nx">timezone</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC780'><br/></div><div class='line' id='LC781'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span> <span class="p">}</span></div><div class='line' id='LC782'><br/></div><div class='line' id='LC783'>			<span class="k">this</span><span class="p">.</span><span class="nx">_limitMinMaxDateTime</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">inst</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC784'>		<span class="p">}</span></div><div class='line' id='LC785'>		<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">ampm</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">ampm</span> <span class="o">=</span> <span class="nx">ampm</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC786'><br/></div><div class='line' id='LC787'>		<span class="c1">//this._formatTime();</span></div><div class='line' id='LC788'>		<span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">formatTime</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeFormat</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">);</span></div><div class='line' id='LC789'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$timeObj</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">$timeObj</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timeSuffix</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC790'>		<span class="k">this</span><span class="p">.</span><span class="nx">timeDefined</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC791'>		<span class="k">if</span> <span class="p">(</span><span class="nx">hasChanged</span><span class="p">)</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC792'>	<span class="p">},</span></div><div class='line' id='LC793'><br/></div><div class='line' id='LC794'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC795'>	<span class="c1">// call custom onSelect.</span></div><div class='line' id='LC796'>	<span class="c1">// bind to sliders slidestop, and grid click.</span></div><div class='line' id='LC797'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC798'>	<span class="nx">_onSelectHandler</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC799'>		<span class="kd">var</span> <span class="nx">onSelect</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">onSelect</span><span class="p">;</span></div><div class='line' id='LC800'>		<span class="kd">var</span> <span class="nx">inputEl</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC801'>		<span class="k">if</span> <span class="p">(</span><span class="nx">onSelect</span> <span class="o">&amp;&amp;</span> <span class="nx">inputEl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC802'>			<span class="nx">onSelect</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">inputEl</span><span class="p">,</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">formattedDateTime</span><span class="p">,</span> <span class="k">this</span><span class="p">]);</span></div><div class='line' id='LC803'>		<span class="p">}</span></div><div class='line' id='LC804'>	<span class="p">},</span></div><div class='line' id='LC805'><br/></div><div class='line' id='LC806'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC807'>	<span class="c1">// left for any backwards compatibility</span></div><div class='line' id='LC808'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC809'>	<span class="nx">_formatTime</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">time</span><span class="p">,</span> <span class="nx">format</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC810'>		<span class="nx">time</span> <span class="o">=</span> <span class="nx">time</span> <span class="o">||</span> <span class="p">{</span> <span class="nx">hour</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span> <span class="nx">minute</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span> <span class="nx">second</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span> <span class="nx">millisec</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">millisec</span><span class="p">,</span> <span class="nx">ampm</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">ampm</span><span class="p">,</span> <span class="nx">timezone</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">timezone</span> <span class="p">};</span></div><div class='line' id='LC811'>		<span class="kd">var</span> <span class="nx">tmptime</span> <span class="o">=</span> <span class="p">(</span><span class="nx">format</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeFormat</span><span class="p">).</span><span class="nx">toString</span><span class="p">();</span></div><div class='line' id='LC812'><br/></div><div class='line' id='LC813'>		<span class="nx">tmptime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">formatTime</span><span class="p">(</span><span class="nx">tmptime</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">);</span></div><div class='line' id='LC814'><br/></div><div class='line' id='LC815'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">tmptime</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC816'>		<span class="k">else</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span> <span class="o">=</span> <span class="nx">tmptime</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC817'>	<span class="p">},</span></div><div class='line' id='LC818'><br/></div><div class='line' id='LC819'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC820'>	<span class="c1">// update our input with the new date time..</span></div><div class='line' id='LC821'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC822'>	<span class="nx">_updateDateTime</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC823'>		<span class="nx">dp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">inst</span> <span class="o">||</span> <span class="nx">dp_inst</span><span class="p">;</span></div><div class='line' id='LC824'>		<span class="kd">var</span> <span class="nx">dt</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_daylightSavingAdjust</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedYear</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedMonth</span><span class="p">,</span> <span class="nx">dp_inst</span><span class="p">.</span><span class="nx">selectedDay</span><span class="p">)),</span></div><div class='line' id='LC825'>			<span class="nx">dateFmt</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">,</span> <span class="s1">&#39;dateFormat&#39;</span><span class="p">),</span></div><div class='line' id='LC826'>			<span class="nx">formatCfg</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getFormatConfig</span><span class="p">(</span><span class="nx">dp_inst</span><span class="p">),</span></div><div class='line' id='LC827'>			<span class="nx">timeAvailable</span> <span class="o">=</span> <span class="nx">dt</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">timeDefined</span><span class="p">;</span></div><div class='line' id='LC828'>		<span class="k">this</span><span class="p">.</span><span class="nx">formattedDate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">formatDate</span><span class="p">(</span><span class="nx">dateFmt</span><span class="p">,</span> <span class="p">(</span><span class="nx">dt</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">?</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">()</span> <span class="o">:</span> <span class="nx">dt</span><span class="p">),</span> <span class="nx">formatCfg</span><span class="p">);</span></div><div class='line' id='LC829'>		<span class="kd">var</span> <span class="nx">formattedDateTime</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">formattedDate</span><span class="p">;</span></div><div class='line' id='LC830'>		<span class="c1">// remove following lines to force every changes in date picker to change the input value</span></div><div class='line' id='LC831'>		<span class="c1">// Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. </span></div><div class='line' id='LC832'>		<span class="c1">// If the user manually empty the value in the input field, the date picker will never change selected value.</span></div><div class='line' id='LC833'>		<span class="c1">//if (dp_inst.lastVal !== undefined &amp;&amp; (dp_inst.lastVal.length &gt; 0 &amp;&amp; this.$input.val().length === 0)) {</span></div><div class='line' id='LC834'>		<span class="c1">//	return;</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//}</span></div><div class='line' id='LC836'><br/></div><div class='line' id='LC837'>		<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC838'>			<span class="nx">formattedDateTime</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span><span class="p">;</span></div><div class='line' id='LC839'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">!==</span> <span class="kc">true</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">alwaysSetTime</span> <span class="o">||</span> <span class="nx">timeAvailable</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC840'>			<span class="nx">formattedDateTime</span> <span class="o">+=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">separator</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeSuffix</span><span class="p">;</span></div><div class='line' id='LC841'>		<span class="p">}</span></div><div class='line' id='LC842'><br/></div><div class='line' id='LC843'>		<span class="k">this</span><span class="p">.</span><span class="nx">formattedDateTime</span> <span class="o">=</span> <span class="nx">formattedDateTime</span><span class="p">;</span></div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">showTimepicker</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC846'>			<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">formattedDate</span><span class="p">);</span></div><div class='line' id='LC847'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">altFieldTimeOnly</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC848'>			<span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">formattedTime</span><span class="p">);</span></div><div class='line' id='LC849'>			<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">formattedDate</span><span class="p">);</span></div><div class='line' id='LC850'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC851'>			<span class="k">this</span><span class="p">.</span><span class="nx">$altInput</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">formattedDateTime</span><span class="p">);</span></div><div class='line' id='LC852'>			<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">formattedDateTime</span><span class="p">);</span></div><div class='line' id='LC853'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC854'>			<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">formattedDateTime</span><span class="p">);</span></div><div class='line' id='LC855'>		<span class="p">}</span></div><div class='line' id='LC856'><br/></div><div class='line' id='LC857'>		<span class="k">this</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;change&quot;</span><span class="p">);</span></div><div class='line' id='LC858'>	<span class="p">}</span></div><div class='line' id='LC859'><br/></div><div class='line' id='LC860'><span class="p">});</span></div><div class='line' id='LC861'><br/></div><div class='line' id='LC862'><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC863'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC864'>	<span class="c1">// shorthand just to use timepicker..</span></div><div class='line' id='LC865'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC866'>	<span class="nx">timepicker</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC867'>		<span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC868'>		<span class="kd">var</span> <span class="nx">tmp_args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC869'><br/></div><div class='line' id='LC870'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">o</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">tmp_args</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="p">{</span> <span class="nx">timeOnly</span><span class="o">:</span> <span class="kc">true</span> <span class="p">});</span> <span class="p">}</span></div><div class='line' id='LC871'><br/></div><div class='line' id='LC872'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC873'>			<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datetimepicker</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">tmp_args</span><span class="p">);</span></div><div class='line' id='LC874'>		<span class="p">});</span></div><div class='line' id='LC875'>	<span class="p">},</span></div><div class='line' id='LC876'><br/></div><div class='line' id='LC877'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC878'>	<span class="c1">// extend timepicker to datepicker</span></div><div class='line' id='LC879'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC880'>	<span class="nx">datetimepicker</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC881'>		<span class="nx">o</span> <span class="o">=</span> <span class="nx">o</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC882'>		<span class="kd">var</span> <span class="nx">tmp_args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC883'><br/></div><div class='line' id='LC884'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">){</span></div><div class='line' id='LC885'>			<span class="k">if</span><span class="p">(</span><span class="nx">o</span> <span class="o">==</span> <span class="s1">&#39;getDate&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>				<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="nx">tmp_args</span><span class="p">);</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC888'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC889'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC890'>					<span class="kd">var</span> <span class="nx">$t</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC891'>					<span class="nx">$t</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">$t</span><span class="p">,</span> <span class="nx">tmp_args</span><span class="p">);</span></div><div class='line' id='LC892'>				<span class="p">});</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC894'>		<span class="p">}</span></div><div class='line' id='LC895'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC896'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC897'>				<span class="kd">var</span> <span class="nx">$t</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC898'>				<span class="nx">$t</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">_newInst</span><span class="p">(</span><span class="nx">$t</span><span class="p">,</span> <span class="nx">o</span><span class="p">).</span><span class="nx">_defaults</span><span class="p">);</span></div><div class='line' id='LC899'>			<span class="p">});</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC901'>	<span class="p">}</span></div><div class='line' id='LC902'><span class="p">});</span></div><div class='line' id='LC903'><br/></div><div class='line' id='LC904'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseDateTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">,</span> <span class="nx">timeSettings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>	<span class="kd">var</span> <span class="nx">parseRes</span> <span class="o">=</span> <span class="nx">parseDateTimeInternal</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">,</span> <span class="nx">timeSettings</span><span class="p">);</span></div><div class='line' id='LC906'>	<span class="k">if</span> <span class="p">(</span><span class="nx">parseRes</span><span class="p">.</span><span class="nx">timeObj</span><span class="p">)</span></div><div class='line' id='LC907'>	<span class="p">{</span></div><div class='line' id='LC908'>		<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">parseRes</span><span class="p">.</span><span class="nx">timeObj</span><span class="p">;</span></div><div class='line' id='LC909'>		<span class="nx">parseRes</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">setHours</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">millisec</span><span class="p">);</span></div><div class='line' id='LC910'>	<span class="p">}</span></div><div class='line' id='LC911'><br/></div><div class='line' id='LC912'>	<span class="k">return</span> <span class="nx">parseRes</span><span class="p">.</span><span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC913'><span class="p">};</span></div><div class='line' id='LC914'><br/></div><div class='line' id='LC915'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">timeString</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC918'>	<span class="c1">// pattern for standard and localized AM/PM markers</span></div><div class='line' id='LC919'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC920'>	<span class="kd">var</span> <span class="nx">getPatternAmpm</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">amNames</span><span class="p">,</span> <span class="nx">pmNames</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC921'>		<span class="kd">var</span> <span class="nx">markers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC922'>		<span class="k">if</span> <span class="p">(</span><span class="nx">amNames</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC923'>			<span class="nx">$</span><span class="p">.</span><span class="nx">merge</span><span class="p">(</span><span class="nx">markers</span><span class="p">,</span> <span class="nx">amNames</span><span class="p">);</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC925'>		<span class="k">if</span> <span class="p">(</span><span class="nx">pmNames</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC926'>			<span class="nx">$</span><span class="p">.</span><span class="nx">merge</span><span class="p">(</span><span class="nx">markers</span><span class="p">,</span> <span class="nx">pmNames</span><span class="p">);</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC928'>		<span class="nx">markers</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">markers</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">val</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[.*+?|()\[\]{}\\]/g</span><span class="p">,</span> <span class="s1">&#39;\\$&amp;&#39;</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC929'>		<span class="k">return</span> <span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">markers</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)?&#39;</span><span class="p">;</span></div><div class='line' id='LC930'>	<span class="p">};</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC932'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC933'>	<span class="c1">// figure out position of time elements.. cause js cant do named captures</span></div><div class='line' id='LC934'>	<span class="c1">//########################################################################</span></div><div class='line' id='LC935'>	<span class="kd">var</span> <span class="nx">getFormatPositions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">timeFormat</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC936'>		<span class="kd">var</span> <span class="nx">finds</span> <span class="o">=</span> <span class="nx">timeFormat</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g</span><span class="p">),</span></div><div class='line' id='LC937'>			<span class="nx">orders</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">h</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">m</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">s</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">l</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">t</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">z</span><span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">};</span></div><div class='line' id='LC938'><br/></div><div class='line' id='LC939'>		<span class="k">if</span> <span class="p">(</span><span class="nx">finds</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC940'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">finds</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC941'>				<span class="k">if</span> <span class="p">(</span><span class="nx">orders</span><span class="p">[</span><span class="nx">finds</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">toString</span><span class="p">().</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)]</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'>					<span class="nx">orders</span><span class="p">[</span><span class="nx">finds</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">toString</span><span class="p">().</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)]</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC946'>		<span class="k">return</span> <span class="nx">orders</span><span class="p">;</span></div><div class='line' id='LC947'>	<span class="p">};</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC949'>	<span class="kd">var</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">extendRemove</span><span class="p">(</span><span class="nx">extendRemove</span><span class="p">({},</span> <span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">),</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC951'>	<span class="kd">var</span> <span class="nx">regstr</span> <span class="o">=</span> <span class="s1">&#39;^&#39;</span> <span class="o">+</span> <span class="nx">timeFormat</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span></div><div class='line' id='LC952'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/h{1,2}/ig</span><span class="p">,</span> <span class="s1">&#39;(\\d?\\d)&#39;</span><span class="p">)</span></div><div class='line' id='LC953'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/m{1,2}/ig</span><span class="p">,</span> <span class="s1">&#39;(\\d?\\d)&#39;</span><span class="p">)</span></div><div class='line' id='LC954'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/s{1,2}/ig</span><span class="p">,</span> <span class="s1">&#39;(\\d?\\d)&#39;</span><span class="p">)</span></div><div class='line' id='LC955'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/l{1}/ig</span><span class="p">,</span> <span class="s1">&#39;(\\d?\\d?\\d)&#39;</span><span class="p">)</span></div><div class='line' id='LC956'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/t{1,2}/ig</span><span class="p">,</span> <span class="nx">getPatternAmpm</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">amNames</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">pmNames</span><span class="p">))</span></div><div class='line' id='LC957'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/z{1}/ig</span><span class="p">,</span> <span class="s1">&#39;(z|[-+]\\d\\d:?\\d\\d)?&#39;</span><span class="p">)</span></div><div class='line' id='LC958'>			<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s/g</span><span class="p">,</span> <span class="s1">&#39;\\s?&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timeSuffix</span> <span class="o">+</span> <span class="s1">&#39;$&#39;</span><span class="p">,</span></div><div class='line' id='LC959'>		<span class="nx">order</span> <span class="o">=</span> <span class="nx">getFormatPositions</span><span class="p">(</span><span class="nx">timeFormat</span><span class="p">),</span></div><div class='line' id='LC960'>		<span class="nx">ampm</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></div><div class='line' id='LC961'>		<span class="nx">treg</span><span class="p">;</span></div><div class='line' id='LC962'><br/></div><div class='line' id='LC963'>	<span class="nx">treg</span> <span class="o">=</span> <span class="nx">timeString</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">regstr</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">));</span></div><div class='line' id='LC964'><br/></div><div class='line' id='LC965'>	<span class="kd">var</span> <span class="nx">resTime</span> <span class="o">=</span> <span class="p">{</span><span class="nx">hour</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">minute</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">second</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">millisec</span><span class="o">:</span> <span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC967'>	<span class="k">if</span> <span class="p">(</span><span class="nx">treg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC968'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">t</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC969'>			<span class="k">if</span> <span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">t</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">t</span><span class="p">].</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC970'>				<span class="nx">ampm</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC971'>				<span class="nx">resTime</span><span class="p">.</span><span class="nx">ampm</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC972'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC973'>				<span class="nx">ampm</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">t</span><span class="p">],</span> <span class="nx">o</span><span class="p">.</span><span class="nx">amNames</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;AM&#39;</span> <span class="o">:</span> <span class="s1">&#39;PM&#39;</span><span class="p">;</span></div><div class='line' id='LC974'>				<span class="nx">resTime</span><span class="p">.</span><span class="nx">ampm</span> <span class="o">=</span> <span class="nx">o</span><span class="p">[</span><span class="nx">ampm</span> <span class="o">==</span> <span class="s1">&#39;AM&#39;</span> <span class="o">?</span> <span class="s1">&#39;amNames&#39;</span> <span class="o">:</span> <span class="s1">&#39;pmNames&#39;</span><span class="p">][</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC975'>			<span class="p">}</span></div><div class='line' id='LC976'>		<span class="p">}</span></div><div class='line' id='LC977'><br/></div><div class='line' id='LC978'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">h</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC979'>			<span class="k">if</span> <span class="p">(</span><span class="nx">ampm</span> <span class="o">==</span> <span class="s1">&#39;AM&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">h</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;12&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC980'>				<span class="nx">resTime</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">// 12am = 0 hour</span></div><div class='line' id='LC981'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC982'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ampm</span> <span class="o">==</span> <span class="s1">&#39;PM&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">h</span><span class="p">]</span> <span class="o">!=</span> <span class="s1">&#39;12&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC983'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">resTime</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">h</span><span class="p">],</span><span class="mi">10</span><span class="p">)</span> <span class="o">+</span> <span class="mi">12</span><span class="p">;</span> <span class="c1">// 12pm = 12 hour, any other pm = hour + 12</span></div><div class='line' id='LC984'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span> <span class="nx">resTime</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">h</span><span class="p">]);</span> <span class="p">}</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC987'>		<span class="p">}</span></div><div class='line' id='LC988'><br/></div><div class='line' id='LC989'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">m</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="nx">resTime</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">m</span><span class="p">]);</span> <span class="p">}</span></div><div class='line' id='LC990'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">s</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="nx">resTime</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">s</span><span class="p">]);</span> <span class="p">}</span></div><div class='line' id='LC991'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">l</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span> <span class="nx">resTime</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">l</span><span class="p">]);</span> <span class="p">}</span></div><div class='line' id='LC992'>		<span class="k">if</span> <span class="p">(</span><span class="nx">order</span><span class="p">.</span><span class="nx">z</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">z</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC993'>			<span class="kd">var</span> <span class="nx">tz</span> <span class="o">=</span> <span class="nx">treg</span><span class="p">[</span><span class="nx">order</span><span class="p">.</span><span class="nx">z</span><span class="p">].</span><span class="nx">toUpperCase</span><span class="p">();</span></div><div class='line' id='LC994'>			<span class="k">switch</span> <span class="p">(</span><span class="nx">tz</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC995'>				<span class="k">case</span> <span class="mi">1</span><span class="o">:</span>	<span class="c1">// Z</span></div><div class='line' id='LC996'>					<span class="nx">tz</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">timezoneIso8601</span> <span class="o">?</span> <span class="s1">&#39;Z&#39;</span> <span class="o">:</span> <span class="s1">&#39;+0000&#39;</span><span class="p">;</span></div><div class='line' id='LC997'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC998'>				<span class="k">case</span> <span class="mi">5</span><span class="o">:</span>	<span class="c1">// +hhmm</span></div><div class='line' id='LC999'>					<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">timezoneIso8601</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1000'>						<span class="nx">tz</span> <span class="o">=</span> <span class="nx">tz</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;0000&#39;</span> <span class="o">?</span></div><div class='line' id='LC1001'>							<span class="s1">&#39;Z&#39;</span> <span class="o">:</span></div><div class='line' id='LC1002'>							<span class="nx">tz</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">tz</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC1003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1004'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1005'>				<span class="k">case</span> <span class="mi">6</span><span class="o">:</span>	<span class="c1">// +hh:mm</span></div><div class='line' id='LC1006'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">o</span><span class="p">.</span><span class="nx">timezoneIso8601</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1007'>						<span class="nx">tz</span> <span class="o">=</span> <span class="nx">tz</span> <span class="o">==</span> <span class="s1">&#39;Z&#39;</span> <span class="o">||</span> <span class="nx">tz</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;00:00&#39;</span> <span class="o">?</span></div><div class='line' id='LC1008'>							<span class="s1">&#39;+0000&#39;</span> <span class="o">:</span></div><div class='line' id='LC1009'>							<span class="nx">tz</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/:/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1010'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1011'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tz</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;00:00&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tz</span> <span class="o">=</span> <span class="s1">&#39;Z&#39;</span><span class="p">;</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1015'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1016'>			<span class="p">}</span></div><div class='line' id='LC1017'>			<span class="nx">resTime</span><span class="p">.</span><span class="nx">timezone</span> <span class="o">=</span> <span class="nx">tz</span><span class="p">;</span></div><div class='line' id='LC1018'>		<span class="p">}</span></div><div class='line' id='LC1019'><br/></div><div class='line' id='LC1020'><br/></div><div class='line' id='LC1021'>		<span class="k">return</span> <span class="nx">resTime</span><span class="p">;</span></div><div class='line' id='LC1022'>	<span class="p">}</span></div><div class='line' id='LC1023'><br/></div><div class='line' id='LC1024'>	<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1025'><span class="p">};</span></div><div class='line' id='LC1026'><br/></div><div class='line' id='LC1027'><span class="c1">//########################################################################</span></div><div class='line' id='LC1028'><span class="c1">// format the time all pretty...</span></div><div class='line' id='LC1029'><span class="c1">// format = string format of the time</span></div><div class='line' id='LC1030'><span class="c1">// time = a {}, not a Date() for timezones</span></div><div class='line' id='LC1031'><span class="c1">// options = essentially the regional[].. amNames, pmNames, ampm</span></div><div class='line' id='LC1032'><span class="c1">//########################################################################</span></div><div class='line' id='LC1033'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">formatTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">format</span><span class="p">,</span> <span class="nx">time</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1034'>	<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC1035'>	<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC1036'>	<span class="nx">time</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">hour</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">minute</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">second</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">millisec</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span> <span class="nx">timezone</span><span class="o">:</span><span class="s1">&#39;+0000&#39;</span><span class="p">},</span> <span class="nx">time</span><span class="p">);</span></div><div class='line' id='LC1037'><br/></div><div class='line' id='LC1038'>	<span class="kd">var</span> <span class="nx">tmptime</span> <span class="o">=</span> <span class="nx">format</span><span class="p">;</span></div><div class='line' id='LC1039'>	<span class="kd">var</span> <span class="nx">ampmName</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">amNames</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1040'><br/></div><div class='line' id='LC1041'>	<span class="kd">var</span> <span class="nx">hour</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">time</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC1042'>	<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">ampm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1043'>		<span class="k">if</span> <span class="p">(</span><span class="nx">hour</span> <span class="o">&gt;</span> <span class="mi">11</span><span class="p">){</span></div><div class='line' id='LC1044'>			<span class="nx">ampmName</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">pmNames</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1045'>			<span class="k">if</span><span class="p">(</span><span class="nx">hour</span> <span class="o">&gt;</span> <span class="mi">12</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1046'>				<span class="nx">hour</span> <span class="o">=</span> <span class="nx">hour</span> <span class="o">%</span> <span class="mi">12</span><span class="p">;</span></div><div class='line' id='LC1047'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1048'>		<span class="p">}</span></div><div class='line' id='LC1049'>		<span class="k">if</span> <span class="p">(</span><span class="nx">hour</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1050'>			<span class="nx">hour</span> <span class="o">=</span> <span class="mi">12</span><span class="p">;</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1052'>	<span class="p">}</span></div><div class='line' id='LC1053'>	<span class="nx">tmptime</span> <span class="o">=</span> <span class="nx">tmptime</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:hh?|mm?|ss?|[tT]{1,2}|[lz])/g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1054'>		<span class="k">switch</span> <span class="p">(</span><span class="nx">match</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC1055'>			<span class="k">case</span> <span class="s1">&#39;hh&#39;</span><span class="o">:</span> <span class="k">return</span> <span class="p">(</span><span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">hour</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC1056'>			<span class="k">case</span> <span class="s1">&#39;h&#39;</span><span class="o">:</span>  <span class="k">return</span> <span class="nx">hour</span><span class="p">;</span></div><div class='line' id='LC1057'>			<span class="k">case</span> <span class="s1">&#39;mm&#39;</span><span class="o">:</span> <span class="k">return</span> <span class="p">(</span><span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">time</span><span class="p">.</span><span class="nx">minute</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC1058'>			<span class="k">case</span> <span class="s1">&#39;m&#39;</span><span class="o">:</span>  <span class="k">return</span> <span class="nx">time</span><span class="p">.</span><span class="nx">minute</span><span class="p">;</span></div><div class='line' id='LC1059'>			<span class="k">case</span> <span class="s1">&#39;ss&#39;</span><span class="o">:</span> <span class="k">return</span> <span class="p">(</span><span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">time</span><span class="p">.</span><span class="nx">second</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC1060'>			<span class="k">case</span> <span class="s1">&#39;s&#39;</span><span class="o">:</span>  <span class="k">return</span> <span class="nx">time</span><span class="p">.</span><span class="nx">second</span><span class="p">;</span></div><div class='line' id='LC1061'>			<span class="k">case</span> <span class="s1">&#39;l&#39;</span><span class="o">:</span>  <span class="k">return</span> <span class="p">(</span><span class="s1">&#39;00&#39;</span> <span class="o">+</span> <span class="nx">time</span><span class="p">.</span><span class="nx">millisec</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC1062'>			<span class="k">case</span> <span class="s1">&#39;z&#39;</span><span class="o">:</span>  <span class="k">return</span> <span class="nx">time</span><span class="p">.</span><span class="nx">timezone</span><span class="p">;</span></div><div class='line' id='LC1063'>			<span class="k">case</span> <span class="s1">&#39;t&#39;</span><span class="o">:</span> <span class="k">case</span> <span class="s1">&#39;tt&#39;</span><span class="o">:</span></div><div class='line' id='LC1064'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">ampm</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1065'>					<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1066'>						<span class="nx">ampmName</span> <span class="o">=</span> <span class="nx">ampmName</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1068'>					<span class="k">return</span> <span class="nx">match</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;T&#39;</span> <span class="o">?</span> <span class="nx">ampmName</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">()</span> <span class="o">:</span> <span class="nx">ampmName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC1069'>				<span class="p">}</span></div><div class='line' id='LC1070'>				<span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1071'>		<span class="p">}</span></div><div class='line' id='LC1072'>	<span class="p">});</span></div><div class='line' id='LC1073'><br/></div><div class='line' id='LC1074'>	<span class="nx">tmptime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="nx">tmptime</span><span class="p">);</span></div><div class='line' id='LC1075'>	<span class="k">return</span> <span class="nx">tmptime</span><span class="p">;</span></div><div class='line' id='LC1076'><span class="p">};</span></div><div class='line' id='LC1077'><br/></div><div class='line' id='LC1078'><span class="c1">//########################################################################</span></div><div class='line' id='LC1079'><span class="c1">// the bad hack :/ override datepicker so it doesnt close on select</span></div><div class='line' id='LC1080'><span class="c1">// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378</span></div><div class='line' id='LC1081'><span class="c1">//########################################################################</span></div><div class='line' id='LC1082'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_selectDate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_selectDate</span><span class="p">;</span></div><div class='line' id='LC1083'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_selectDate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">dateStr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1084'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">id</span><span class="p">)[</span><span class="mi">0</span><span class="p">]),</span></div><div class='line' id='LC1085'>		<span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1086'><br/></div><div class='line' id='LC1087'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1088'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_limitMinMaxDateTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1089'>		<span class="nx">inst</span><span class="p">.</span><span class="nx">inline</span> <span class="o">=</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">stay_open</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1090'>		<span class="c1">//This way the onSelect handler called from calendarpicker get the full dateTime</span></div><div class='line' id='LC1091'>		<span class="k">this</span><span class="p">.</span><span class="nx">_base_selectDate</span><span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">dateStr</span><span class="p">);</span></div><div class='line' id='LC1092'>		<span class="nx">inst</span><span class="p">.</span><span class="nx">inline</span> <span class="o">=</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">stay_open</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1093'>		<span class="k">this</span><span class="p">.</span><span class="nx">_notifyChange</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1094'>		<span class="k">this</span><span class="p">.</span><span class="nx">_updateDatepicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1095'>	<span class="p">}</span></div><div class='line' id='LC1096'>	<span class="k">else</span> <span class="p">{</span> <span class="k">this</span><span class="p">.</span><span class="nx">_base_selectDate</span><span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">dateStr</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC1097'><span class="p">};</span></div><div class='line' id='LC1098'><br/></div><div class='line' id='LC1099'><span class="c1">//#############################################################################################</span></div><div class='line' id='LC1100'><span class="c1">// second bad hack :/ override datepicker so it triggers an event when changing the input field</span></div><div class='line' id='LC1101'><span class="c1">// and does not redraw the datepicker on every selectDate event</span></div><div class='line' id='LC1102'><span class="c1">//#############################################################################################</span></div><div class='line' id='LC1103'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_updateDatepicker</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_updateDatepicker</span><span class="p">;</span></div><div class='line' id='LC1104'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_updateDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1105'><br/></div><div class='line' id='LC1106'>	<span class="c1">// don&#39;t popup the datepicker if there is another instance already opened</span></div><div class='line' id='LC1107'>	<span class="kd">var</span> <span class="nx">input</span> <span class="o">=</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">input</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1108'>	<span class="k">if</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_curInst</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1109'>	   <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_curInst</span> <span class="o">!=</span> <span class="nx">inst</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1110'>	   <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_datepickerShowing</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC1111'>	   <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_lastInput</span> <span class="o">!=</span> <span class="nx">input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1112'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1113'>	<span class="p">}</span></div><div class='line' id='LC1114'><br/></div><div class='line' id='LC1115'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">inst</span><span class="p">.</span><span class="nx">stay_open</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;boolean&#39;</span> <span class="o">||</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">stay_open</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1116'><br/></div><div class='line' id='LC1117'>		<span class="k">this</span><span class="p">.</span><span class="nx">_base_updateDatepicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1118'><br/></div><div class='line' id='LC1119'>		<span class="c1">// Reload the time control when changing something in the input text field.</span></div><div class='line' id='LC1120'>		<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1121'>		<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1122'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_addTimePicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1123'><br/></div><div class='line' id='LC1124'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">useLocalTimezone</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//checks daylight saving with the new date.</span></div><div class='line' id='LC1125'>				<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">inst</span><span class="p">.</span><span class="nx">selectedYear</span><span class="p">,</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">selectedMonth</span><span class="p">,</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">selectedDay</span><span class="p">,</span> <span class="mi">12</span><span class="p">);</span></div><div class='line' id='LC1126'>				<span class="nx">selectLocalTimeZone</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">,</span> <span class="nx">date</span><span class="p">);</span></div><div class='line' id='LC1127'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC1128'>			<span class="p">}</span></div><div class='line' id='LC1129'>		<span class="p">}</span></div><div class='line' id='LC1130'>	<span class="p">}</span></div><div class='line' id='LC1131'><span class="p">};</span></div><div class='line' id='LC1132'><br/></div><div class='line' id='LC1133'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1134'><span class="c1">// third bad hack :/ override datepicker so it allows spaces and colon in the input field</span></div><div class='line' id='LC1135'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1136'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_doKeyPress</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_doKeyPress</span><span class="p">;</span></div><div class='line' id='LC1137'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_doKeyPress</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1138'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">),</span></div><div class='line' id='LC1139'>		<span class="nx">tp_inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1140'><br/></div><div class='line' id='LC1141'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1142'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;constrainInput&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1143'>			<span class="kd">var</span> <span class="nx">ampm</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">ampm</span><span class="p">,</span></div><div class='line' id='LC1144'>				<span class="nx">dateChars</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_possibleChars</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;dateFormat&#39;</span><span class="p">)),</span></div><div class='line' id='LC1145'>				<span class="nx">datetimeChars</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeFormat</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span></div><div class='line' id='LC1146'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[hms]/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1147'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/TT/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;APM&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1148'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/Tt/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;AaPpMm&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1149'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/tT/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;AaPpMm&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1150'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/T/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;AP&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1151'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/tt/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;apm&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1152'>								<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/t/g</span><span class="p">,</span> <span class="nx">ampm</span> <span class="o">?</span> <span class="s1">&#39;ap&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC1153'>								<span class="s2">&quot; &quot;</span> <span class="o">+</span></div><div class='line' id='LC1154'>								<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">separator</span> <span class="o">+</span></div><div class='line' id='LC1155'>								<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeSuffix</span> <span class="o">+</span></div><div class='line' id='LC1156'>								<span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">showTimezone</span> <span class="o">?</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezoneList</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC1157'>								<span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">amNames</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">))</span> <span class="o">+</span></div><div class='line' id='LC1158'>								<span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">pmNames</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">))</span> <span class="o">+</span></div><div class='line' id='LC1159'>								<span class="nx">dateChars</span><span class="p">,</span></div><div class='line' id='LC1160'>				<span class="nx">chr</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">charCode</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">:</span> <span class="nx">event</span><span class="p">.</span><span class="nx">charCode</span><span class="p">);</span></div><div class='line' id='LC1161'>			<span class="k">return</span> <span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">||</span> <span class="p">(</span><span class="nx">chr</span> <span class="o">&lt;</span> <span class="s1">&#39; &#39;</span> <span class="o">||</span> <span class="o">!</span><span class="nx">dateChars</span> <span class="o">||</span> <span class="nx">datetimeChars</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">chr</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1162'>		<span class="p">}</span></div><div class='line' id='LC1163'>	<span class="p">}</span></div><div class='line' id='LC1164'><br/></div><div class='line' id='LC1165'>	<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_doKeyPress</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC1166'><span class="p">};</span></div><div class='line' id='LC1167'><br/></div><div class='line' id='LC1168'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1169'><span class="c1">// Override key up event to sync manual input changes.</span></div><div class='line' id='LC1170'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1171'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_doKeyUp</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_doKeyUp</span><span class="p">;</span></div><div class='line' id='LC1172'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_doKeyUp</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1173'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">),</span></div><div class='line' id='LC1174'>		<span class="nx">tp_inst</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1175'><br/></div><div class='line' id='LC1176'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1177'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timeOnly</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">inst</span><span class="p">.</span><span class="nx">input</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">!=</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">lastVal</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1178'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1179'>				<span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_updateDatepicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1180'>			<span class="p">}</span></div><div class='line' id='LC1181'>			<span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1182'>				<span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span></div><div class='line' id='LC1183'>			<span class="p">}</span></div><div class='line' id='LC1184'>		<span class="p">}</span></div><div class='line' id='LC1185'>	<span class="p">}</span></div><div class='line' id='LC1186'><br/></div><div class='line' id='LC1187'>	<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_doKeyUp</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC1188'><span class="p">};</span></div><div class='line' id='LC1189'><br/></div><div class='line' id='LC1190'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1191'><span class="c1">// override &quot;Today&quot; button to also grab the time.</span></div><div class='line' id='LC1192'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1193'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_gotoToday</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_gotoToday</span><span class="p">;</span></div><div class='line' id='LC1194'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_gotoToday</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1195'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">id</span><span class="p">)[</span><span class="mi">0</span><span class="p">]),</span></div><div class='line' id='LC1196'>		<span class="nx">$dp</span> <span class="o">=</span> <span class="nx">inst</span><span class="p">.</span><span class="nx">dpDiv</span><span class="p">;</span></div><div class='line' id='LC1197'>	<span class="k">this</span><span class="p">.</span><span class="nx">_base_gotoToday</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC1198'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1199'>	<span class="nx">selectLocalTimeZone</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">);</span></div><div class='line' id='LC1200'>	<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1201'>	<span class="k">this</span><span class="p">.</span><span class="nx">_setTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="nx">now</span><span class="p">);</span></div><div class='line' id='LC1202'>	<span class="nx">$</span><span class="p">(</span> <span class="s1">&#39;.ui-datepicker-today&#39;</span><span class="p">,</span> <span class="nx">$dp</span><span class="p">).</span><span class="nx">click</span><span class="p">();</span></div><div class='line' id='LC1203'><span class="p">};</span></div><div class='line' id='LC1204'><br/></div><div class='line' id='LC1205'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1206'><span class="c1">// Disable &amp; enable the Time in the datetimepicker</span></div><div class='line' id='LC1207'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1208'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_disableTimepickerDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1209'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1212'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1213'>	<span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">).</span><span class="nx">datepicker</span><span class="p">(</span><span class="s1">&#39;getDate&#39;</span><span class="p">);</span> <span class="c1">// Init selected[Year|Month|Day]</span></div><div class='line' id='LC1214'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1215'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">showTimepicker</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1216'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1217'>	<span class="p">}</span></div><div class='line' id='LC1218'><span class="p">};</span></div><div class='line' id='LC1219'><br/></div><div class='line' id='LC1220'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_enableTimepickerDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1221'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1223'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1224'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1225'>	<span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">).</span><span class="nx">datepicker</span><span class="p">(</span><span class="s1">&#39;getDate&#39;</span><span class="p">);</span> <span class="c1">// Init selected[Year|Month|Day]</span></div><div class='line' id='LC1226'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1227'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">showTimepicker</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1228'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_addTimePicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span> <span class="c1">// Could be disabled on page load</span></div><div class='line' id='LC1229'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1230'>	<span class="p">}</span></div><div class='line' id='LC1231'><span class="p">};</span></div><div class='line' id='LC1232'><br/></div><div class='line' id='LC1233'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1234'><span class="c1">// Create our own set time function</span></div><div class='line' id='LC1235'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1236'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_setTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1237'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1238'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1239'>		<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">,</span></div><div class='line' id='LC1240'>			<span class="c1">// calling _setTime with no date sets time to defaults</span></div><div class='line' id='LC1241'>			<span class="nx">hour</span> <span class="o">=</span> <span class="nx">date</span> <span class="o">?</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getHours</span><span class="p">()</span> <span class="o">:</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span></div><div class='line' id='LC1242'>			<span class="nx">minute</span> <span class="o">=</span> <span class="nx">date</span> <span class="o">?</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">()</span> <span class="o">:</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span></div><div class='line' id='LC1243'>			<span class="nx">second</span> <span class="o">=</span> <span class="nx">date</span> <span class="o">?</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">()</span> <span class="o">:</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span></div><div class='line' id='LC1244'>			<span class="nx">millisec</span> <span class="o">=</span> <span class="nx">date</span> <span class="o">?</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">()</span> <span class="o">:</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">millisec</span><span class="p">;</span></div><div class='line' id='LC1245'>		<span class="c1">//check if within min/max times..</span></div><div class='line' id='LC1246'>		<span class="c1">// correct check if within min/max times. 	</span></div><div class='line' id='LC1247'>		<span class="c1">// Rewritten by Scott A. Woodward</span></div><div class='line' id='LC1248'>		<span class="kd">var</span> <span class="nx">hourEq</span> <span class="o">=</span> <span class="nx">hour</span> <span class="o">===</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">,</span></div><div class='line' id='LC1249'>			<span class="nx">minuteEq</span> <span class="o">=</span> <span class="nx">minute</span> <span class="o">===</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">,</span></div><div class='line' id='LC1250'>			<span class="nx">secondEq</span> <span class="o">=</span> <span class="nx">second</span> <span class="o">===</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">;</span></div><div class='line' id='LC1251'>		<span class="kd">var</span> <span class="nx">reset</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1252'>		<span class="k">if</span><span class="p">(</span><span class="nx">hour</span> <span class="o">&lt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">hourMin</span> <span class="o">||</span> <span class="nx">hour</span> <span class="o">&gt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">hourMax</span><span class="p">)</span>  </div><div class='line' id='LC1253'>			<span class="nx">reset</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1254'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="p">(</span><span class="nx">minute</span> <span class="o">&lt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">minuteMin</span> <span class="o">||</span> <span class="nx">minute</span> <span class="o">&gt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">minuteMax</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">hourEq</span><span class="p">)</span></div><div class='line' id='LC1255'>			<span class="nx">reset</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1256'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="p">(</span><span class="nx">second</span> <span class="o">&lt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">secondMin</span> <span class="o">||</span> <span class="nx">second</span> <span class="o">&gt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">secondMax</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">hourEq</span> <span class="o">&amp;&amp;</span> <span class="nx">minuteEq</span><span class="p">)</span></div><div class='line' id='LC1257'>			<span class="nx">reset</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1258'>		<span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="p">(</span><span class="nx">millisec</span> <span class="o">&lt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">millisecMin</span> <span class="o">||</span> <span class="nx">millisec</span> <span class="o">&gt;</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">millisecMax</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">hourEq</span> <span class="o">&amp;&amp;</span> <span class="nx">minuteEq</span> <span class="o">&amp;&amp;</span> <span class="nx">secondEq</span><span class="p">)</span></div><div class='line' id='LC1259'>			<span class="nx">reset</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1260'>		<span class="k">if</span><span class="p">(</span><span class="nx">reset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1261'>			<span class="nx">hour</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">hourMin</span><span class="p">;</span></div><div class='line' id='LC1262'>			<span class="nx">minute</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">minuteMin</span><span class="p">;</span></div><div class='line' id='LC1263'>			<span class="nx">second</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">secondMin</span><span class="p">;</span></div><div class='line' id='LC1264'>			<span class="nx">millisec</span> <span class="o">=</span> <span class="nx">defaults</span><span class="p">.</span><span class="nx">millisecMin</span><span class="p">;</span></div><div class='line' id='LC1265'>		<span class="p">}</span></div><div class='line' id='LC1266'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour</span> <span class="o">=</span> <span class="nx">hour</span><span class="p">;</span></div><div class='line' id='LC1267'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute</span> <span class="o">=</span> <span class="nx">minute</span><span class="p">;</span></div><div class='line' id='LC1268'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second</span> <span class="o">=</span> <span class="nx">second</span><span class="p">;</span></div><div class='line' id='LC1269'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec</span> <span class="o">=</span> <span class="nx">millisec</span><span class="p">;</span></div><div class='line' id='LC1270'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">)</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="nx">hour</span><span class="p">);</span></div><div class='line' id='LC1271'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">)</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="nx">minute</span><span class="p">);</span></div><div class='line' id='LC1272'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">)</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="nx">second</span><span class="p">);</span></div><div class='line' id='LC1273'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">)</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec_slider</span><span class="p">.</span><span class="nx">slider</span><span class="p">(</span><span class="s1">&#39;value&#39;</span><span class="p">,</span> <span class="nx">millisec</span><span class="p">);</span></div><div class='line' id='LC1274'><br/></div><div class='line' id='LC1275'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_onTimeChange</span><span class="p">();</span></div><div class='line' id='LC1276'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1277'>	<span class="p">}</span></div><div class='line' id='LC1278'><span class="p">};</span></div><div class='line' id='LC1279'><br/></div><div class='line' id='LC1280'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1281'><span class="c1">// Create new public method to set only time, callable as $().datepicker(&#39;setTime&#39;, date)</span></div><div class='line' id='LC1282'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1283'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_setTimeDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">date</span><span class="p">,</span> <span class="nx">withDate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1284'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1286'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1287'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1288'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1289'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1290'>		<span class="k">this</span><span class="p">.</span><span class="nx">_setDateFromField</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1291'>		<span class="kd">var</span> <span class="nx">tp_date</span><span class="p">;</span></div><div class='line' id='LC1292'>		<span class="k">if</span> <span class="p">(</span><span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1293'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">date</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1294'>				<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_parseTime</span><span class="p">(</span><span class="nx">date</span><span class="p">,</span> <span class="nx">withDate</span><span class="p">);</span></div><div class='line' id='LC1295'>				<span class="nx">tp_date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1296'>				<span class="nx">tp_date</span><span class="p">.</span><span class="nx">setHours</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec</span><span class="p">);</span></div><div class='line' id='LC1297'>			<span class="p">}</span></div><div class='line' id='LC1298'>			<span class="k">else</span> <span class="p">{</span> <span class="nx">tp_date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">());</span> <span class="p">}</span></div><div class='line' id='LC1299'>			<span class="k">if</span> <span class="p">(</span><span class="nx">tp_date</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span> <span class="o">==</span> <span class="s1">&#39;Invalid Date&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">tp_date</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1300'>			<span class="k">this</span><span class="p">.</span><span class="nx">_setTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="nx">tp_date</span><span class="p">);</span></div><div class='line' id='LC1301'>		<span class="p">}</span></div><div class='line' id='LC1302'>	<span class="p">}</span></div><div class='line' id='LC1303'><br/></div><div class='line' id='LC1304'><span class="p">};</span></div><div class='line' id='LC1305'><br/></div><div class='line' id='LC1306'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1307'><span class="c1">// override setDate() to allow setting time too within Date object</span></div><div class='line' id='LC1308'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1309'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_setDateDatepicker</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_setDateDatepicker</span><span class="p">;</span></div><div class='line' id='LC1310'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_setDateDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1311'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1313'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1314'>	<span class="kd">var</span> <span class="nx">tp_date</span> <span class="o">=</span> <span class="p">(</span><span class="nx">date</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="o">?</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">())</span> <span class="o">:</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC1315'><br/></div><div class='line' id='LC1316'>	<span class="k">this</span><span class="p">.</span><span class="nx">_updateDatepicker</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1317'>	<span class="k">this</span><span class="p">.</span><span class="nx">_base_setDateDatepicker</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1318'>	<span class="k">this</span><span class="p">.</span><span class="nx">_setTimeDatepicker</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">tp_date</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1319'><span class="p">};</span></div><div class='line' id='LC1320'><br/></div><div class='line' id='LC1321'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1322'><span class="c1">// override getDate() to allow getting time too within Date object</span></div><div class='line' id='LC1323'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1324'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_getDateDatepicker</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getDateDatepicker</span><span class="p">;</span></div><div class='line' id='LC1325'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_getDateDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">noDefault</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1326'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1327'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1328'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1329'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1330'><br/></div><div class='line' id='LC1331'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1332'>		<span class="k">this</span><span class="p">.</span><span class="nx">_setDateFromField</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="nx">noDefault</span><span class="p">);</span></div><div class='line' id='LC1333'>		<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getDate</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1334'>		<span class="k">if</span> <span class="p">(</span><span class="nx">date</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_parseTime</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">target</span><span class="p">).</span><span class="nx">val</span><span class="p">(),</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">timeOnly</span><span class="p">))</span> <span class="p">{</span> <span class="nx">date</span><span class="p">.</span><span class="nx">setHours</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">hour</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">minute</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">second</span><span class="p">,</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">millisec</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC1335'>		<span class="k">return</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC1336'>	<span class="p">}</span></div><div class='line' id='LC1337'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_base_getDateDatepicker</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">noDefault</span><span class="p">);</span></div><div class='line' id='LC1338'><span class="p">};</span></div><div class='line' id='LC1339'><br/></div><div class='line' id='LC1340'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1341'><span class="c1">// override parseDate() because UI 1.8.14 throws an error about &quot;Extra characters&quot;</span></div><div class='line' id='LC1342'><span class="c1">// An option in datapicker to ignore extra format characters would be nicer.</span></div><div class='line' id='LC1343'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1344'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_parseDate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseDate</span><span class="p">;</span></div><div class='line' id='LC1345'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">format</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splitRes</span> <span class="o">=</span> <span class="nx">splitDateTime</span><span class="p">(</span><span class="nx">format</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC1347'>	<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_parseDate</span><span class="p">(</span><span class="nx">format</span><span class="p">,</span> <span class="nx">splitRes</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC1348'><span class="p">};</span></div><div class='line' id='LC1349'><br/></div><div class='line' id='LC1350'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1351'><span class="c1">// override formatDate to set date with time to the input</span></div><div class='line' id='LC1352'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1353'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_formatDate</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_formatDate</span><span class="p">;</span></div><div class='line' id='LC1354'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_formatDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="nx">day</span><span class="p">,</span> <span class="nx">month</span><span class="p">,</span> <span class="nx">year</span><span class="p">){</span></div><div class='line' id='LC1355'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1356'>	<span class="k">if</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1357'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_updateDateTime</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1358'>		<span class="k">return</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">$input</span><span class="p">.</span><span class="nx">val</span><span class="p">();</span></div><div class='line' id='LC1359'>	<span class="p">}</span></div><div class='line' id='LC1360'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_base_formatDate</span><span class="p">(</span><span class="nx">inst</span><span class="p">);</span></div><div class='line' id='LC1361'><span class="p">};</span></div><div class='line' id='LC1362'><br/></div><div class='line' id='LC1363'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1364'><span class="c1">// override options setter to add time to maxDate(Time) and minDate(Time). MaxDate</span></div><div class='line' id='LC1365'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1366'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_optionDatepicker</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_optionDatepicker</span><span class="p">;</span></div><div class='line' id='LC1367'><span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_optionDatepicker</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1368'>	<span class="kd">var</span> <span class="nx">inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getInst</span><span class="p">(</span><span class="nx">target</span><span class="p">);</span></div><div class='line' id='LC1369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">inst</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC1370'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1371'>	<span class="kd">var</span> <span class="nx">tp_inst</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_get</span><span class="p">(</span><span class="nx">inst</span><span class="p">,</span> <span class="s1">&#39;timepicker&#39;</span><span class="p">);</span></div><div class='line' id='LC1372'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1373'>		<span class="kd">var</span> <span class="nx">min</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">max</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">onselect</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1374'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// if min/max was set with the string</span></div><div class='line' id='LC1375'>			<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;minDate&#39;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;minDateTime&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1376'>				<span class="nx">min</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1378'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;maxDate&#39;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;maxDateTime&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">max</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;onSelect&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onselect</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1388'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//if min/max was set with the JSON</span></div><div class='line' id='LC1390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">minDate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">min</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">minDate</span><span class="p">;</span></div><div class='line' id='LC1392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">minDateTime</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">min</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">minDateTime</span><span class="p">;</span></div><div class='line' id='LC1395'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">maxDate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">max</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">maxDate</span><span class="p">;</span></div><div class='line' id='LC1398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">maxDateTime</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">max</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">maxDateTime</span><span class="p">;</span></div><div class='line' id='LC1401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1407'>		<span class="k">if</span><span class="p">(</span><span class="nx">min</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//if min was set</span></div><div class='line' id='LC1408'>			<span class="k">if</span> <span class="p">(</span><span class="nx">min</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1409'>				<span class="nx">min</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1411'>				<span class="nx">min</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">min</span><span class="p">);</span></div><div class='line' id='LC1412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1413'><br/></div><div class='line' id='LC1414'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDate</span> <span class="o">=</span> <span class="nx">min</span><span class="p">;</span></div><div class='line' id='LC1415'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">minDateTime</span> <span class="o">=</span> <span class="nx">min</span><span class="p">;</span></div><div class='line' id='LC1416'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">max</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//if max was set</span></div><div class='line' id='LC1417'>			<span class="k">if</span><span class="p">(</span><span class="nx">max</span><span class="o">===</span><span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1418'>				<span class="nx">max</span><span class="o">=</span><span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1420'>				<span class="nx">max</span><span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">max</span><span class="p">);</span></div><div class='line' id='LC1421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1422'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDate</span> <span class="o">=</span> <span class="nx">max</span><span class="p">;</span></div><div class='line' id='LC1423'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">maxDateTime</span> <span class="o">=</span> <span class="nx">max</span><span class="p">;</span></div><div class='line' id='LC1424'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">onselect</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1425'>			<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">onSelect</span> <span class="o">=</span> <span class="nx">onselect</span><span class="p">;</span></div><div class='line' id='LC1426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1427'>	<span class="p">}</span></div><div class='line' id='LC1428'>	<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1429'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_base_optionDatepicker</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC1430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1431'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_base_optionDatepicker</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1432'><span class="p">};</span></div><div class='line' id='LC1433'><br/></div><div class='line' id='LC1434'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1435'><span class="c1">// jQuery extend now ignores nulls!</span></div><div class='line' id='LC1436'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1437'><span class="kd">function</span> <span class="nx">extendRemove</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">props</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1438'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">target</span><span class="p">,</span> <span class="nx">props</span><span class="p">);</span></div><div class='line' id='LC1439'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">name</span> <span class="k">in</span> <span class="nx">props</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1440'>		<span class="k">if</span> <span class="p">(</span><span class="nx">props</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">props</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1441'>			<span class="nx">target</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">props</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1443'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1444'>	<span class="k">return</span> <span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC1445'><span class="p">}</span></div><div class='line' id='LC1446'><br/></div><div class='line' id='LC1447'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1448'><span class="c1">// Splits datetime string into date ans time substrings.</span></div><div class='line' id='LC1449'><span class="c1">// Throws exception when date can&#39;t be parsed</span></div><div class='line' id='LC1450'><span class="c1">// If only date is present, time substring eill be &#39;&#39; </span></div><div class='line' id='LC1451'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1452'><span class="kd">var</span> <span class="nx">splitDateTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">)</span></div><div class='line' id='LC1453'><span class="p">{</span></div><div class='line' id='LC1454'>	<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1455'>		<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_parseDate</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">);</span></div><div class='line' id='LC1456'>	<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1457'>		<span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1458'>			<span class="c1">// Hack!  The error message ends with a colon, a space, and</span></div><div class='line' id='LC1459'>			<span class="c1">// the &quot;extra&quot; characters.  We rely on that instead of</span></div><div class='line' id='LC1460'>			<span class="c1">// attempting to perfectly reproduce the parsing algorithm.</span></div><div class='line' id='LC1461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dateStringLength</span> <span class="o">=</span> <span class="nx">dateTimeString</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="nx">err</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;:&#39;</span><span class="p">)</span><span class="o">-</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC1462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeString</span> <span class="o">=</span> <span class="nx">dateTimeString</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">dateStringLength</span><span class="p">);</span></div><div class='line' id='LC1463'><br/></div><div class='line' id='LC1464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">dateTimeString</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">dateStringLength</span><span class="p">),</span> <span class="nx">dateTimeString</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">dateStringLength</span><span class="p">)];</span></div><div class='line' id='LC1465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC1466'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1467'>			<span class="k">throw</span> <span class="nx">err</span><span class="p">;</span></div><div class='line' id='LC1468'>		<span class="p">}</span></div><div class='line' id='LC1469'>	<span class="p">}</span></div><div class='line' id='LC1470'>	<span class="k">return</span> <span class="p">[</span><span class="nx">dateTimeString</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">];</span></div><div class='line' id='LC1471'><span class="p">};</span></div><div class='line' id='LC1472'><br/></div><div class='line' id='LC1473'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1474'><span class="c1">// Internal function to parse datetime interval</span></div><div class='line' id='LC1475'><span class="c1">// Returns: {date: Date, timeObj: Object}, where</span></div><div class='line' id='LC1476'><span class="c1">//   date - parsed date without time (type Date)</span></div><div class='line' id='LC1477'><span class="c1">//   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional</span></div><div class='line' id='LC1478'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1479'><span class="kd">var</span> <span class="nx">parseDateTimeInternal</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">,</span> <span class="nx">timeSettings</span><span class="p">)</span></div><div class='line' id='LC1480'><span class="p">{</span></div><div class='line' id='LC1481'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC1482'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">splitRes</span> <span class="o">=</span> <span class="nx">splitDateTime</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">dateTimeString</span><span class="p">,</span> <span class="nx">dateSettings</span><span class="p">);</span></div><div class='line' id='LC1483'>	<span class="nx">date</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">_base_parseDate</span><span class="p">(</span><span class="nx">dateFormat</span><span class="p">,</span> <span class="nx">splitRes</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="nx">dateSettings</span><span class="p">);</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">splitRes</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC1485'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeString</span> <span class="o">=</span> <span class="nx">splitRes</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">separator</span> <span class="o">=</span> <span class="nx">timeSettings</span> <span class="o">&amp;&amp;</span> <span class="nx">timeSettings</span><span class="p">.</span><span class="nx">separator</span> <span class="o">?</span> <span class="nx">timeSettings</span><span class="p">.</span><span class="nx">separator</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">separator</span><span class="p">;</span>            </div><div class='line' id='LC1488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">timeString</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">separator</span><span class="p">)</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s1">&#39;Missing time separator&#39;</span><span class="p">;</span></div><div class='line' id='LC1490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeString</span> <span class="o">=</span> <span class="nx">timeString</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">separator</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC1492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parsedTime</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">datepicker</span><span class="p">.</span><span class="nx">parseTime</span><span class="p">(</span><span class="nx">timeFormat</span><span class="p">,</span> <span class="nx">timeString</span><span class="p">,</span> <span class="nx">timeSettings</span><span class="p">);</span></div><div class='line' id='LC1493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">parsedTime</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="s1">&#39;Wrong time format&#39;</span><span class="p">;</span></div><div class='line' id='LC1495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span><span class="nx">date</span><span class="o">:</span> <span class="nx">date</span><span class="p">,</span> <span class="nx">timeObj</span><span class="o">:</span> <span class="nx">parsedTime</span><span class="p">};</span></div><div class='line' id='LC1497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span><span class="nx">date</span><span class="o">:</span> <span class="nx">date</span><span class="p">};</span></div><div class='line' id='LC1499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1500'><span class="p">};</span></div><div class='line' id='LC1501'><br/></div><div class='line' id='LC1502'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1503'><span class="c1">// Internal function to set timezone_select to the local timezone</span></div><div class='line' id='LC1504'><span class="c1">//#######################################################################################</span></div><div class='line' id='LC1505'><span class="kd">var</span> <span class="nx">selectLocalTimeZone</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tp_inst</span><span class="p">,</span> <span class="nx">date</span><span class="p">)</span></div><div class='line' id='LC1506'><span class="p">{</span></div><div class='line' id='LC1507'>	<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span> <span class="o">&amp;&amp;</span> <span class="nx">tp_inst</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1508'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">useLocalTimezone</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1509'>		<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">date</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="nx">date</span> <span class="o">:</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC1510'>		<span class="kd">var</span> <span class="nx">tzoffset</span> <span class="o">=</span> <span class="nx">timeZoneString</span><span class="p">(</span><span class="nx">now</span><span class="p">);</span></div><div class='line' id='LC1511'>		<span class="k">if</span> <span class="p">(</span><span class="nx">tp_inst</span><span class="p">.</span><span class="nx">_defaults</span><span class="p">.</span><span class="nx">timezoneIso8601</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1512'>			<span class="nx">tzoffset</span> <span class="o">=</span> <span class="nx">tzoffset</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">tzoffset</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC1513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1514'>		<span class="nx">tp_inst</span><span class="p">.</span><span class="nx">timezone_select</span><span class="p">.</span><span class="nx">val</span><span class="p">(</span><span class="nx">tzoffset</span><span class="p">);</span></div><div class='line' id='LC1515'>	<span class="p">}</span></div><div class='line' id='LC1516'><span class="p">};</span></div><div class='line' id='LC1517'><br/></div><div class='line' id='LC1518'><span class="c1">// Input: Date Object</span></div><div class='line' id='LC1519'><span class="c1">// Output: String with timezone offset, e.g. &#39;+0100&#39;</span></div><div class='line' id='LC1520'><span class="kd">var</span> <span class="nx">timeZoneString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">date</span><span class="p">)</span></div><div class='line' id='LC1521'><span class="p">{</span></div><div class='line' id='LC1522'>	<span class="kd">var</span> <span class="nx">off</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">getTimezoneOffset</span><span class="p">()</span> <span class="o">*</span> <span class="o">-</span><span class="mi">10100</span> <span class="o">/</span> <span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC1523'>	<span class="kd">var</span> <span class="nx">timezone</span> <span class="o">=</span> <span class="p">(</span><span class="nx">off</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;+&#39;</span> <span class="o">:</span> <span class="s1">&#39;-&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">off</span><span class="p">).</span><span class="nx">toString</span><span class="p">().</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1524'>	<span class="k">return</span> <span class="nx">timezone</span><span class="p">;</span></div><div class='line' id='LC1525'><span class="p">};</span></div><div class='line' id='LC1526'><br/></div><div class='line' id='LC1527'><span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Timepicker</span><span class="p">();</span> <span class="c1">// singleton instance</span></div><div class='line' id='LC1528'><span class="nx">$</span><span class="p">.</span><span class="nx">timepicker</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s2">&quot;1.0.1&quot;</span><span class="p">;</span></div><div class='line' id='LC1529'><br/></div><div class='line' id='LC1530'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/trentrichardson/jQuery-Timepicker-Addon/tree-list/7b9ba9a5111fcb716c5eacafe922b6be484eae49" data-blob-url-prefix="/trentrichardson/jQuery-Timepicker-Addon/blob/7b9ba9a5111fcb716c5eacafe922b6be484eae49">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1340659530" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.11318s from fe17.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1340659530" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1340659530" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    
    <span id='server_response_time' data-time='0.11562' data-host='fe17'></span>
  </body>
</html>

