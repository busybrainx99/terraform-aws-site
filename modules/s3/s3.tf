resource "aws_s3_bucket" "static_website" {
  bucket        = var.bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "block_access" {
  bucket = aws_s3_bucket.static_website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_s3_object" "webfiles" {
  bucket       = aws_s3_bucket.static_website.id
  for_each     = fileset("modules/s3/static_website", "**/*.*")
  key          = each.value
  source       = "modules/s3/static_website/${each.value}"
  content_type = each.value
}


#resource "aws_s3_object" "index_html" {
#  bucket       = aws_s3_bucket.static_website.id
#  key          = "index.html"
#  source       = "/home/goodness/aws_website/modules/s3/static_website/index.html"
#  etag         = filemd5("/home/goodness/aws_website/modules/s3/static_website/index.html")
#  content_type = "text/html"
#}

#resource "aws_s3_object" "styles_css" {
#  bucket       = aws_s3_bucket.static_website.id
#  key          = "styles.css"
#  source       = "/home/goodness/aws_website/modules/s3/static_website/styles.css"
#  etag         = filemd5("/home/goodness/aws_website/modules/s3/static_website/styles.css")
#  content_type = "text/css"
#}

#resource "aws_s3_object" "index_js" {
#  bucket       = aws_s3_bucket.static_website.id
#  key          = "index.js"
#  source       = "/home/goodness/aws_website/modules/s3/static_website/index.js"
#  etag         = filemd5("/home/goodness/aws_website/modules/s3/static_website/index.js")
#  content_type = "application/javascript"
#}


