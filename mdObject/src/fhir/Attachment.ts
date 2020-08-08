/*
 * Comply with https://www.hl7.org/fhir/datatypes.html#Attachment
 * The full fhir support expected in version 3 and above
 */

export class Attachment
{
    contentType: string // Mime type of the content, with charset etc.
    //"language": "<code>", // Human language of the content (BCP-47)
    data: string; // Data inline, base64ed
    url: string; // Uri where the data can be found
    size: number; // Number of bytes of content (if url provided)
    //"hash": "<base64Binary>", // Hash of the data (sha-1, base64ed)
    title: string; // Label to display in place of the data
    creation: Date; // Date attachment was first created
}