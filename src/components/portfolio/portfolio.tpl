<div class="portfolio" ng-style="bgStyle">
  <div class="nav">
    <a href="{{current.prev ? current.prev : last}}" class="navi">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="80" height="80" viewBox="0 0 80 80">
        <text x="-125" y="65" font-family="druk-wide" fill="none" stroke-width="1" stroke="white"  font-size="80">
          back
        </text>
      </svg>
    </a><span class="navi slug">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="auto" height="80" viewBox="0 0 80 80">
        <g><text x="-108" y="65" font-family="druk-wide" fill="rgba(255,255,255,1)" font-size="80">
          {{ current.slug }}
        </text></g>
      </svg>
    </span><a href="{{current.next ? current.next : first}}" class="navi">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="80" height="80" viewBox="0 0 80 80">
        <text x="-110" y="65" font-family="druk-wide" fill="none" stroke-width="1" stroke="white"  font-size="80">
          next
        </text>
      </svg>
    </a>
  </div>

  <div class="content relative">
    <div ng-if="bannerImg" class="banner">
      <img src="{{bannerImgSrc}}" />
    </div>

    <div ng-if="socials" class="social-row text-center">
      <a ng-repeat="s in socials" href="{{s.url}}" target="_blank" class="icon inline-block">
        <img src="{{s.icon}}" />
      </a>
    </div>

    <div class="wp-data">
      <h1 ng-if="subtitle" class="subtitle">{{ subtitle }}</h1>
      <span ng-bind-html="content"></span>
    </div>
  </div>
</div>
