using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Encodings.Web;

namespace Library.Framework.TagHelpers.SmartTags
{
    [HtmlTargetElement("smart-form")]
    public class SmartFormTagHelper : FormTagHelper
    {
        private const string SubmitButtonJsAttributeName = "asp-submit-btn-js";
        private const string TitleAttributeName = "asp-title";
        private const string FormIdAttributeName = "id";
        private const string SubmitBtnTextAttributeName = "asp-submit-btn-text";
        private const string CancelButtonJsAttributeName = "asp-cancel-btn-js";
        private const string BackToControllerAttributeName = "asp-back-to-controller";
        private const string BackToActionAttributeName = "asp-back-to-action";
        private const string MethodAttributeName = "asp-method";

        [HtmlAttributeName(FormIdAttributeName)]
        public string FormId { get; set; }

        [HtmlAttributeName(TitleAttributeName)]
        public string Title { get; set; }

        [HtmlAttributeName(SubmitButtonJsAttributeName)]
        public string SubmitButtonJs { get; set; }

        [HtmlAttributeName(SubmitBtnTextAttributeName)]
        public string SubmitBtnText { get; set; } = "SubmitInformation";

        [HtmlAttributeName(CancelButtonJsAttributeName)]
        public string CancelButtonJs { get; set; }
        
        [HtmlAttributeName(BackToControllerAttributeName)]
        public string ControllerName { get; set; }
        [HtmlAttributeName(BackToActionAttributeName)]
        public string ActionName { get; set; } = "Index";
        [HtmlAttributeName(MethodAttributeName)]
        public string Method { get; set; } = "Post";
        public SmartFormTagHelper(IHtmlGenerator generator) : base(generator)
        {
        }
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "form";
            output.TagMode = TagMode.StartTagAndEndTag;

            if (!string.IsNullOrEmpty(FormId))
                    output.Attributes.Add("id", FormId);
                
            output.Attributes.Add("enctype", "multipart/form-data");
            output.Attributes.Add("method", Method);
            output.Attributes.Add("data-ajax-failure", "OnFailure");
            output.Attributes.Add("data-ajax-success", "OnSuccess");
            output.Attributes.Add("autocomplete", "Off");
            output.Attributes.Add("data-ajax", "true");
            output.Attributes.Add("asp-antiforgery", "true");
       
            string Content =
                $@"
                <div class='row'>
                <div class='col-12'>

                    <div class='card'>
                        <h5 class='card-header' style='font-weight:bold'>{Title}</h5>
                            <div class='card-body'>
                ";
            if (!string.IsNullOrEmpty(Title))
            {
                output.PreContent.AppendHtml(Content);

            }
            var builder = new HtmlContentBuilder();
            string submitBtn = string.IsNullOrEmpty(SubmitButtonJs) ? $"<button type='submit' class='btn btn-success btn-labeled'>{SubmitBtnText} <b><i class='fa fa-check-circle'></i></b></button>" : $"<button type='button' id='submit-{FormId}' onclick='{SubmitButtonJs};' class='btn btn-primary'><span>{SubmitBtnText}</span> <b><i class='fa fa-check-circle'></i></b></button>";
            builder.AppendHtml($"{submitBtn}&nbsp;");

            var parameters = string.Empty;
            var temp = $"{{";

            if (!string.IsNullOrEmpty(CancelButtonJs))
            {
                string[] inputParameters = CancelButtonJs.Split(",");
                var i = 1;
                foreach (var item in inputParameters)
                {
                    temp += $"{item}:$('#{item}').val()";
                    if (inputParameters.Length != i)
                    {
                        temp += ", ";
                    }
                    i++;
                }
            }
            parameters = temp + $"}}";

           string cancelBtn = $"<button type='button' onclick=\"OpenWindowCreate('/{ControllerName}/{ActionName}',{parameters},'{ControllerName}');\" class='btn btn-danger'><span>Cancel</span> <b><i class='fa fa-times-circle'></i></b></button>";

            builder.AppendHtml(cancelBtn);

            output.PostContent.AppendHtml(builder);

            output.PostContent.AppendHtml("</div></div></div></div>");
            base.Process(context, output);

        }

    }
}
