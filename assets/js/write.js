<div class="row">
	<div class="col-xs-2">
		{{ if .Id }}
			<a href="/delete/{{.Id}}">Delete</a>
		{{ end }}
	</div>
	<div class="col-xs-4">
		<form role="form" method="POST" action="/SavePost">
			<input type="hidden" name="id" value="{{.Id}}" />
			<div class="form-group">
				<label>Title</label>
				<input type="text" class="form-control" id="title" name="title" value="{{.Title}}"  />
			</div>
			<div class="form-group">
				<label>Content</label>
				<textarea id="content" name="content">{{.ContentMarkdown}}</textarea>
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div>
	<div class="col-xs-6" id="md_html">
		{{.ContentHtml | unescape }}
	</div>
</div>

<script type="text/javascript" src="/assets/js/write.js"></script>