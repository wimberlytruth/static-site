08/02/2020 08:50:39 AM

The Workflow

1. scan

2. ocr using tesseract

3. mark page numbers with comment tags

4. find missing pages, insert <hr> tag in those gaps

5. delete the garbage lines caused by hand writing; tesseract usually 
separates garbage text and quality text into separate lines, so the 
process of looking for garbage and deleting it becomes a simple 
line-by-line activity.

6. find the paragraph transitions within each page. then select the 
entire paragraph, press Ctrl+Shift+P, which will pull up the command 
palette in VSCode -- search for Join Line. This will put the paragraph 
on one single line.

7. paste the annotation tag wherever you see hand-written notes in the 
pdf files. don't count/number the tags -- it's a hassle and you can 
easily count them with ctrl+F, using the tag for a query. also, remember 
to include the underlining. 

8. Run spellcheck on the five html files.
